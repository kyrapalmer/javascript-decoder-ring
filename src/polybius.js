// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () { 
    
    function polybius(input, encode = true) {
      //create an alphabet array and an array of the corresponding codes for each letter
      //both arrays must be the same length
      const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
      let alphaCode = ["11", "21", "31", "41", "51", "12", "22", "32", "42", "42", "52", "13", "23", "33", "43", "53", "14", "24", "34", "44", "54", "15", "25", "35", "45", "55"];
    
      
      let finalResult = [];
      
      //encoding
      if (encode) {
        let result = [];
        
        //split input message into individual characters
        let splitInput = input.toLowerCase().split('');

        //for each character, check to see if it's not a letter and maintain that non-letter throughout encoding
        //find the corresponding index of each character in the alphabet and return that index
        splitInput.forEach(char => {
          if (!/^[a-zA-Z]/g.test(char)) finalResult.push(char);
          else {alphabet.find(match => {
            if (char === match) finalResult.push(alphabet.indexOf(match));
          });
          }
        });

        //take the index of each character and apply that to the alphaCode array, return that double digit value
        finalResult.forEach(index => {
          if (isNaN(index)) result.push(index);
          if (index === " " ) result.push(" ");
          result.push(alphaCode[index]);
        })

        //return the joined, encoded message
        return result.join('');
      } 
      
      //decoding
      else if (!encode) {
       //check to see if encoded message is valid and doesn't contain single characters
        if (input.split(' ').join('').length % 2 !== 0) return false;

        //split input by words
        let inputWords = input.split(' ');
        
        //split each word into encoded, double digit characters
        let splitWords = [];
        for (word of inputWords) {
          splitWords.push(word.match(/.{2}/g));
        }
        
        //decode the characters within each word, ensuring 42 returns both "i" and "j"
        //the return is an array containing decoded words within their own arrays
        for (word of splitWords) {
          let result = [];
          for (letter of word) {
            if (parseInt(letter) === 42) {
              result.push("(i/j)");
            } else {
              let indexValue = alphaCode.indexOf(letter);
              result.push(alphabet[indexValue]);
            }
          }
          finalResult.push(result);
        }

        //take the array of decoded characters and join characters within words
        let joinedWords = [];
        for (word of finalResult) {
          joinedWords.push(word.join(''));
        }
        
        //join words with a space
        return joinedWords.join(' ');
      }

    }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
