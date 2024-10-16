  const textarea = document.querySelector("#custom-text");
  const wordCountMessage = document.getElementById('wordCountMessage');
  const wordLimit = 50;
  // Function to count words in the textarea
  function countWords(text) {
    // Split by spaces and filter out empty strings
    return text.trim().split(/\s+/).filter(Boolean).length;
  }
  
  function autoCapitalizeFirstLetter(text) {
    // Capitalize the first letter of the very first sentence, if it is lowercase
    text = text.replace(/^([a-z])/, (match) => match.toUpperCase());

    // Use a regular expression to find sentence-ending punctuation marks followed by spaces or newlines
    return text.replace(/([.?!])(\s+)([a-z])/g, function(match, punctuation, space, nextChar) {
      // Capitalize the first letter after the sentence-ending punctuation
      return punctuation + space + nextChar.toUpperCase();
    });
  }

  // Event listener for the input event
  textarea.addEventListener('input', function () {
    const text = textarea.value;
    const wordCount = countWords(text);
    textarea.value = autoCapitalizeFirstLetter(text);

    if (wordCount > wordLimit) {
      // Prevent further input by trimming extra words
      const words = text.trim().split(/\s+/).slice(0, wordLimit).join(' ');
      textarea.value = words;  // Update the textarea content with the limited words
      // Show warning message
      wordCountMessage.style.color="#330066";
      wordCountMessage.textContent = `You have reached the word limit of ${wordLimit} words.`;
      } else {
        // Clear warning if within the limit
        wordCountMessage.textContent = '';
      }
       
      

  });

  function prnt(){
    window.print();
  }

  