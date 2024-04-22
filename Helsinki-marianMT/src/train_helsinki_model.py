from transformers import MarianMTModel, MarianTokenizer, Trainer, TrainingArguments, TrainerCallback
from datasets import load_dataset
from accelerate import Accelerator
import csv
import os

class CSVLoggerCallback(TrainerCallback):
    def __init__(self, csv_file='outputs/training_output.csv', summary_file='outputs/summary_training_data.csv'):
        self.csv_file = csv_file
        self.summary_file = summary_file
        os.makedirs(os.path.dirname(csv_file), exist_ok=True)
        os.makedirs(os.path.dirname(summary_file), exist_ok=True)
        
        # create format for headers if files do not exist
        if not os.path.isfile(csv_file):
            with open(csv_file, mode='w', newline='') as file:
                writer = csv.writer(file)
                writer.writerow(['iteration', 'epoch', 'eval_loss', 'eval_runtime', 'eval_samples_per_second', 'eval_steps_per_second'])
        if not os.path.isfile(summary_file):
            with open(summary_file, mode='w', newline='') as file:
                writer = csv.writer(file)
                writer.writerow(['iteration', 'epoch', 'train_runtime', 'train_samples_per_second', 'train_steps_per_second', 'train_loss'])
        
        # iteration 
        self.iteration = self.determine_next_iteration()

    def determine_next_iteration(self):
        last_iter_training = 0
        last_iter_summary = 0
        
        #last iteration from training 
        if os.path.isfile(self.csv_file):
            with open(self.csv_file, mode='r', newline='') as file:
                lines = list(csv.DictReader(file))
                if lines:
                    last_iter_training = int(lines[-1]['iteration'])
        
        #last iteration from summary 
        if os.path.isfile(self.summary_file):
            with open(self.summary_file, mode='r', newline='') as file:
                lines = list(csv.DictReader(file))
                if lines:
                    last_iter_summary = int(lines[-1]['iteration'])
        
        # iteration index
        return max(last_iter_training, last_iter_summary) + 1

    def on_log(self, args, state, control, logs=None, **kwargs):
        # metrics
        if logs and 'eval_loss' in logs:
            with open(self.csv_file, mode='a', newline='') as file:
                writer = csv.writer(file)
                writer.writerow([
                    self.iteration,
                    state.epoch,
                    logs.get('eval_loss', ''),
                    logs.get('eval_runtime', ''),
                    logs.get('eval_samples_per_second', ''),
                    logs.get('eval_steps_per_second', '')
                ])

    def on_train_end(self, args, state, control, **kwargs):
        logs = state.log_history[-1]
        with open(self.summary_file, mode='a', newline='') as file:
            writer = csv.writer(file)
            writer.writerow([
                self.iteration,
                state.epoch,
                logs.get('train_runtime', ''),
                logs.get('train_samples_per_second', ''),
                logs.get('train_steps_per_second', ''),
                logs.get('train_loss', '')
                
            ])
        self.iteration += 1 

def main():
    model_name = 'Helsinki-NLP/opus-mt-ka-en'
    tokenizer = MarianTokenizer.from_pretrained(model_name)
    model = MarianMTModel.from_pretrained(model_name)

    dataset = load_dataset('csv', data_files={'train': 'data/training_data.csv', 'validation': 'data/validation_data.csv'})

    def preprocess_function(examples):
    # tokenize w padding and truncation
        model_inputs = tokenizer(examples['georgian'], max_length=512, truncation=True, padding="max_length")
        with tokenizer.as_target_tokenizer():
            labels = tokenizer(examples['english'], max_length=512, truncation=True, padding="max_length")
        model_inputs['labels'] = labels['input_ids']
        return model_inputs

    tokenized_datasets = dataset.map(preprocess_function, batched=True)

    accelerator = Accelerator()

    training_args = TrainingArguments(
        output_dir='models/checkpoints',
        evaluation_strategy="epoch",
        learning_rate=2e-5,
        per_device_train_batch_size=16,
        weight_decay=0.01,
        save_total_limit=2,
        num_train_epochs=3
    )

    trainer = Trainer(
        model=model,
        args=training_args,
        train_dataset=tokenized_datasets['train'],
        eval_dataset=tokenized_datasets['validation'],
        tokenizer=tokenizer,
        callbacks=[CSVLoggerCallback()]
    )

    trainer = accelerator.prepare(trainer)
    trainer.train()

    model.save_pretrained('models/final_model')
    tokenizer.save_pretrained('models/final_model')

if __name__ == "__main__":
    main()
 