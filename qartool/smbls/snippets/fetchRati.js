export const fetchRati = async (textToTranslate = 'Hello, how are you?') => {
      // Hugging Face API URL for the Helsinki-NLP English to Georgian model
      const apiUrl = 'http://localhost:5001';

      // Construct the request headers and body
      const headers = {
        'Content-Type': 'application/json',
      };
      const requestBody = {
        text: textToTranslate,
      };

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
          const translatedText = data.translated_text; // Adjusting path according to Hugging Face response structure
          return translatedText;
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }