export const fetchHelsinki = async (textToTranslate = 'Hello, how are you?') => {
      // Your Hugging Face API key
      const apiKey = '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';
      // Hugging Face API URL for the Helsinki-NLP English to Georgian model
      const apiUrl = 'https://api-inference.huggingface.co/models/Helsinki-NLP/opus-mt-ka-en';

      // Construct the request headers and body
      const headers = {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      };
      const requestBody = {
        inputs: textToTranslate,
      };
      console.log(textToTranslate)

      // Make a POST request using Fetch
      return await fetch(apiUrl, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(requestBody),
        })
        .then(response => response.json())
        .then(data => {
          // Extracting translated text from the response
          console.log("Translated text:", data);
          const translatedText = data[0].translation_text; // Adjusting path according to Hugging Face response structure
          return translatedText;
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }