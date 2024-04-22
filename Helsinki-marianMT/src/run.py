from flask import Flask, request, jsonify
from transformers import MarianMTModel, MarianTokenizer
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # -- CORS --

base_dir = os.path.dirname(os.path.abspath(__file__))
model_path = model_path = os.path.join(base_dir, '..', 'models', 'final_model')
tokenizer = MarianTokenizer.from_pretrained(model_path)
model = MarianMTModel.from_pretrained(model_path)

def translate_georgian_to_english(text):
    """Translates Georgian text to English."""
    encoded_georgian = tokenizer(text, return_tensors="pt", truncation=True, padding="max_length", max_length=512)
    translated_tokens = model.generate(**encoded_georgian)
    translation = tokenizer.decode(translated_tokens[0], skip_special_tokens=True)
    return translation

@app.route('/', methods=['POST'])
def translate():
    """Endpoint to translate text from Georgian to English and return both texts."""
    data = request.json
    georgian_text = data.get('text')
    if not georgian_text:
        return jsonify({'error': 'No text provided'}), 400

    translation = translate_georgian_to_english(georgian_text)
    return jsonify({
        'original_text': georgian_text,
        'translated_text': translation
    })

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5001)  # port 
