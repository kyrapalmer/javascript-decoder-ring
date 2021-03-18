// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    //check to ensure shift is valid
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false
    
    //ensures shift value is able to decode
    if (encode === false) {shift *= -1};

    //converts each character into its key codes and pushes those values to numbers array
    //ensures that the shift is able to 'loop around' the alphabet and that any non-letter characters are maintained
    let numbers = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " " ) numbers.push(32);
      else if (!/^[a-zA-Z]/.test(input[i])) {
        numbers.push(input[i]);
      }
      else if (input.toUpperCase().charCodeAt(i) + shift > 90) {
        let item = input.toUpperCase().charCodeAt(i) + shift;
        numbers.push(item - 91 + 65);
      } else if (input.toUpperCase().charCodeAt(i) + shift < 65) {
        let item = input.toUpperCase().charCodeAt(i) + shift;
        numbers.push(item + 91 - 65);
      }
      else {
      numbers.push(input.toUpperCase().charCodeAt(i) + shift); 
      }
    } //result of this is an array of shifted key codes

    //converts shifted key codes back to letters
    let result = [];
    for (let j = 0; j < numbers.length; j++) {
      if (isNaN(numbers[j])) {
        result.push(numbers[j]);
      }
      else {
      result.push(String.fromCharCode(numbers[j]).toLowerCase());
      }
    }
    return result.join('');
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
