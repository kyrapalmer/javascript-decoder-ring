// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    // error handling
    if (!alphabet || alphabet.length !== 26) return false;
    for (let i = 0; i <= alphabet.length; i++) {
      for (let j = i + 1; j <= alphabet.length; j++) {
        if (alphabet[i] == alphabet[j]) return false;
      }
    }

    // the normal alphabet as an array
    const normalAlph = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];

    let result = [];
    let finalResult = [];
    //split parameter alphabet and input to return array of each character
    const splitInput = input.toLowerCase().split("");
    const splitAlph = alphabet.split("");

    // encoding
    if (encode) {
      
      //compare split input to normal alphabet and get indexes of each input letter
      //take those indexes and use them on the funky alphabet to get the coded characters
      splitInput.forEach((char) => {
        if (!/^[a-zA-Z]/g.test(char)) finalResult.push(char);
        else {
          normalAlph.find((match) => {
            if (char === match) finalResult.push(normalAlph.indexOf(match));
          });
        }
      });
      //finalResult is an array of index values

      //take finalResult and get the corresponding letters in the funky alphabet
      finalResult.forEach((index) => {
        if (isNaN(index)) result.push(index);
        if (index === " ") result.push(" ");
        result.push(splitAlph[index]);
      });
    }

    //decoding
    else {
     //finds the index of each input character in the funky alphabet and holds these index values in the finalResult array
      splitInput.forEach((char) => {
        if (char === " ") finalResult.push(" ");
        splitAlph.find((match) => {
          if (char === match) finalResult.push(splitAlph.indexOf(match));
        });
      });

      //goes through the index array and uses indexes on normal alphabet to get correct letters
      finalResult.forEach((index) => {
        if (index === " ") result.push(" ");
        result.push(normalAlph[index]);
      });
    }
    return result.join("");
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
