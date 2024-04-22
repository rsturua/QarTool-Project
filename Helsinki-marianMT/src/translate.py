from transformers import MarianMTModel, MarianTokenizer
import random
import os

def translate_georgian_to_english(text, model_path='models/final_model'):
    # load the trained model and tokenizer
    tokenizer = MarianTokenizer.from_pretrained(model_path)
    model = MarianMTModel.from_pretrained(model_path)

    # tokenize 
    encoded_georgian = tokenizer(text, return_tensors="pt", truncation=True, padding="max_length")

    # create translation
    translated_tokens = model.generate(**encoded_georgian, max_length=512)

    # decode tokens
    translation = tokenizer.decode(translated_tokens[0], skip_special_tokens=True)

    return translation

def translate_from_dataset(num_sentences, dataset_path='data/test_data.csv'):
    # load test
    with open(dataset_path, 'r', encoding='utf-8') as file:
        lines = [line.strip() for line in file if line.strip()]

    # random, full stop
    selected_lines = random.sample(lines, min(num_sentences, len(lines)))
    georgian_sentences = [line.split('.', 1)[0] + '.' for line in selected_lines]  # get parts including first full stop

    # translate and format
    translation_pairs = []
    for idx, line in enumerate(georgian_sentences, 1):
        translation = translate_georgian_to_english(line)
        translation_pairs.append(f"{idx} - {line}\n{translation}\n")

    return translation_pairs

def main():
    #translator menu 
    print("Choose an option:")
    print("1 - User input")
    print("2 - Translate from dataset")
    choice = input("Enter number (1/2): ")

    if choice == '1':
        georgian_text = input("Please enter Georgian text to translate to English: ")
        translation = translate_georgian_to_english(georgian_text)
        print("Translated text:", translation)
    elif choice == '2':
        num_sentences = int(input("Enter the number of sentences to translate: "))

        with open('data/test_data.csv', 'r', encoding='utf-8') as file:
            total_sentences = sum(1 for line in file if line.strip())

        if num_sentences > total_sentences:
            print(f"Error: The number entered exceeds the total number of sentences in the dataset ({total_sentences}).")
        elif num_sentences > 60:
            print("Error: The number entered is greater than the maximum allowed.")
        else:
            translation_pairs = translate_from_dataset(num_sentences)
            print("Translated sentences:")
            for pair in translation_pairs:
                print(pair)
    else:
        print("Invalid choice. Please enter 1 or 2.")

if __name__ == "__main__":
    main()
