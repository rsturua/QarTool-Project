import csv
import string
import os
import re

def clean_sentence(sentence):
    unwanted_chars = r"[\(\)\{\}/]"
    sentence = re.sub(unwanted_chars, '', sentence)
    # add period at the end if not present
    if sentence.strip() and sentence.strip()[-1] not in string.punctuation:
        sentence += '.'
    return sentence

def create_parallel_corpus(ka_file, en_file, output_file):
    # header
    write_header = not os.path.exists(output_file) or os.stat(output_file).st_size == 0
    
    # read sentences from files
    with open(ka_file, 'r', encoding='utf-8') as ka_f, \
         open(en_file, 'r', encoding='utf-8') as en_f:
        ka_sentences = ka_f.readlines()
        en_sentences = en_f.readlines()

    # number of sentences matching
    if len(ka_sentences) != len(en_sentences):
        raise ValueError("The number of sentences in Georgian and English files don't match.")

    # write to file
    with open(output_file, 'a', newline='', encoding='utf-8') as csv_file:
        writer = csv.writer(csv_file)
        if write_header:
            writer.writerow(['georgian', 'english'])  
        for ka_sentence, en_sentence in zip(ka_sentences, en_sentences):
            ka_sentence = clean_sentence(ka_sentence.strip())  # cleaning
            en_sentence = clean_sentence(en_sentence.strip())  
            writer.writerow([ka_sentence, en_sentence])

create_parallel_corpus('data/ka_corpus.txt', 'data/en_corpus.txt', 'data/parallel_corpus.csv')
