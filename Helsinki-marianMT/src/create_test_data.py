import csv
import string

def add_period_if_needed(sentence):
    # add period at the end if not present
    if sentence.strip() and sentence.strip()[-1] not in string.punctuation:
        sentence += '.'

    return sentence

def create_test_data(georgian_file, english_file, output_file):
    # read sentences from files
    with open(georgian_file, 'r', encoding='utf-8') as georgian_f, \
         open(english_file, 'r', encoding='utf-8') as english_f:
        georgian_sentences = georgian_f.readlines()
        english_sentences = english_f.readlines()

    # number of sentences matching
    if len(georgian_sentences) != len(english_sentences):
        raise ValueError("Number of sentences in Georgian and English files don't match.")

    # write to file
    with open(output_file, 'w', newline='', encoding='utf-8') as csv_file:
        writer = csv.writer(csv_file)
        writer.writerow(['georgian', 'english'])  
        for georgian_sentence, english_sentence in zip(georgian_sentences, english_sentences):
            georgian_sentence = georgian_sentence.strip()  # whitespace
            english_sentence = english_sentence.strip()  
            writer.writerow([georgian_sentence, english_sentence])


create_test_data('data/testka.txt', 'data/testen.txt', 'data/test_data.csv')
