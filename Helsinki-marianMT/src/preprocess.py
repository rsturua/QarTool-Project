import pandas as pd
from sklearn.model_selection import train_test_split
import re

def is_mostly_english(text):
    """Check if the text consists mostly of Latin characters."""
    latin_letters = re.findall(r'[a-zA-Z]', text)
    return len(latin_letters) / len(text) > 0.5  # check for latin 

def clean_text(text):
    """Remove unwanted characters and ensure text is a string."""
    if not isinstance(text, str):
        text = str(text)
    
    text = re.sub(r"[\[\]{}()\\/\|]", "", text)
    
    if any(char.isdigit() for char in text):
        return None
    return text

def preprocess_texts(georgian_text, english_text):
    """Process both texts and check conditions for removal."""
    georgian_text = clean_text(georgian_text)
    english_text = clean_text(english_text)
    
    if georgian_text is None or english_text is None:
        return None, None
    
    if is_mostly_english(georgian_text) and is_mostly_english(english_text):
        return None, None
    
    return georgian_text, english_text

def split_data(input_file, train_output, validation_output, test_size=0.2, random_state=42):
    df = pd.read_csv(input_file)

    processed_texts = df.apply(lambda row: preprocess_texts(row['georgian'], row['english']), axis=1)
    df['georgian'], df['english'] = zip(*processed_texts)
    df.dropna(inplace=True)

    # split the data into training and validation sets
    train_df, validation_df = train_test_split(df, test_size=test_size, random_state=random_state)
    
    # save
    train_df.to_csv(train_output, index=False)
    validation_df.to_csv(validation_output, index=False)

if __name__ == "__main__":
    input_file = 'data/parallel_corpus.csv'
    train_output = 'data/training_data.csv'
    validation_output = 'data/validation_data.csv'
    
    split_data(input_file, train_output, validation_output)
