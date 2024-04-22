export const fetchGoogleTranslate = async (textToTranslate = 'This is the text to be translated.') => { // Replace with your Cloud Translation API key
      const apiKey = 'AIzaSyCc3Nz4A0VepMShTpK1HpILHtb8AfKa0R4';

      // Target language code (Georgian)
      const targetLanguage = 'ka';

      const url = `https://translation.googleapis.com/v3/translate:translate?key=${apiKey}`;

      const data = {
        contentType: 'text/plain',
        requests: [{
          sourceLanguageCode: 'en', // Source language (English)
          targetLanguageCode: targetLanguage,
          inputs: [{
            text: textToTranslate
          }],
        }],
      };

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        // Add this line to disable CORS checks
        mode: 'no-cors'
      };

      try {
        const response = await fetch(url, options);
        const translation = await response.json();

        console.log('Translated text:', translation.translations[0].translatedText);
        return translation.translations[0].translatedText
      } catch (error) {
        console.error('Error:', error);
      }
    }