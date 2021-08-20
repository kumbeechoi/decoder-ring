// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    input = input.toLowerCase();
    // checks if substitution alphabet is inputted and valid
    if(!alphabet || alphabet.length != 26) {
      return false;
    }
    // checks if substitution alphabet is unique 26 letters
    let uniqueAlphabet = new Set();
    for (let i = 0; i < alphabet.length; i++) {
        uniqueAlphabet.add(alphabet[i]);
    }
   if(uniqueAlphabet.size != 26) {
     return false;
   }
    
    // creating an a master alphabet array
    let alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
                         "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // creating array of substitution letters
    let substitutionArray = alphabet.split("");
    
    // to encode
    if(encode == true) {
      let encodedArray = [];
      // substituting each character in word to be encoded
      for (let character of input) {
        if(character == " ") {
          encodedArray.push(" ");
        } else {
            for (let i=0; i < alphabetArray.length; i++) {
              if(character == alphabetArray[i]) {
                encodedArray.push(substitutionArray[i]);
              }
            }
          }
      }
      // returning the encoded string
      return encodedArray.join("");
    }
    
    // to decode
    if(encode == false) {
      let decodedArray = [];
      // decoding each letter according to the key
      for (let character of input) {
        if(character == " ") {
          decodedArray.push(" ");
        } else {
            for (let i=0; i < alphabetArray.length; i++) {
              if(character == substitutionArray[i]) {
                decodedArray.push(alphabetArray[i]);
              }
            }
          }
      }
      // returning decoded string
      return decodedArray.join("");
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
