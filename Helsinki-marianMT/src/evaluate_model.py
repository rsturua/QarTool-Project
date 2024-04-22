import os
import csv
import torch
import datetime
from transformers import MarianMTModel, MarianTokenizer
from datasets import load_dataset
from torch.utils.data import DataLoader, Dataset
from evaluate import load

def log_results(results, iteration, file_path='outputs/evaluation_log.csv'):
    date = datetime.datetime.now().strftime("%Y-%m-%d")
    write_header = not os.path.exists(file_path)
    
    with open(file_path, mode='a', newline='') as file:
        fieldnames = ['date', 'iteration', 'score', 'sys_len', 'ref_len', 'precisions', 'bp', 'counts', 'totals']
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        if write_header:
            writer.writeheader()
        
        results['date'] = date
        results['iteration'] = iteration
        writer.writerow(results)

class TranslationDataset(Dataset):
    def __init__(self, encoded_dataset):
        self.encoded_dataset = encoded_dataset

    def __len__(self):
        return len(self.encoded_dataset)

    def __getitem__(self, idx):
        return {
            'input_ids': torch.tensor(self.encoded_dataset[idx]['input_ids']),
            'attention_mask': torch.tensor(self.encoded_dataset[idx]['attention_mask']),
            'labels': torch.tensor(self.encoded_dataset[idx]['labels'])
        }

def preprocess_function(examples, tokenizer):
    model_inputs = tokenizer(
        examples['georgian'],
        max_length=512,
        truncation=True,
        padding="max_length"
    )
    labels = tokenizer(
        examples['english'],
        max_length=512,
        truncation=True,
        padding="max_length"
    )
    model_inputs['labels'] = labels['input_ids']
    return model_inputs

def evaluate_model(model, tokenizer, tokenized_dataset):
    metric = load("sacrebleu", module_type="metric")
    model.eval()
    predictions = []
    references = []
    dataloader = DataLoader(tokenized_dataset, batch_size=16)

    for batch in dataloader:
        input_ids = batch['input_ids'].to(model.device)
        attention_mask = batch['attention_mask'].to(model.device)
        labels = batch['labels'].to(model.device)

        with torch.no_grad():
            outputs = model.generate(input_ids, attention_mask=attention_mask)

        decoded_preds = tokenizer.batch_decode(outputs, skip_special_tokens=True)
        decoded_labels = tokenizer.batch_decode(labels, skip_special_tokens=True, clean_up_tokenization_spaces=True)

        predictions.extend(decoded_preds)
        references.extend([[label] for label in decoded_labels])

    result = metric.compute(predictions=predictions, references=references)
    return result

def main():
    model_name = 'models/final_model'
    tokenizer = MarianTokenizer.from_pretrained(model_name)
    model = MarianMTModel.from_pretrained(model_name)

    test_data = load_dataset('csv', data_files={'test': 'data/test_data.csv'})
    tokenized_test = test_data['test'].map(lambda x: preprocess_function(x, tokenizer), batched=True)
    tokenized_test_dataset = TranslationDataset(tokenized_test)

    # iteration index
    iteration = 1
    if os.path.exists('outputs/evaluation_log.csv'):
        with open('outputs/evaluation_log.csv', 'r') as file:
            last_line = list(csv.reader(file))[-1]
            iteration = int(last_line[1]) + 1  

    results = evaluate_model(model, tokenizer, tokenized_test_dataset)
    log_results(results, iteration)  # log results

if __name__ == "__main__":
    main()
