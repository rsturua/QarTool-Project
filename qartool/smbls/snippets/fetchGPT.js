export const fetchGPT = async (textToTranslate = 'Hello, how are you?') => {
      // Replace 'YOUR_API_KEY' with your actual API key
      const apiKey = 'AIzaSyCc3Nz4A0VepMShTpK1HpILHtb8AfKa0R4'
      const apiUrl = 'https://translation.googleapis.com/language/translate/v2'

      // Target language (Georgian)
      const targetLanguage = 'ka'

      // Construct the request body
      const requestBody = {
        q: textToTranslate,
        target: targetLanguage,
        key: apiKey,
      }

      // Make a POST request using Fetch
      return await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        })
        .then(response => response.json())
        .then(data => {
          // Extracting translated text from response
          console.log("Translated text:", data)
          const translatedText = data.data.translations[0].translatedText
          return translatedText
        })
        .catch(error => {
          console.error('Error:', error)
        })
    }