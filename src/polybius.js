// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // 42 is I/J
    const polybius = [11, 21, 31, 41, 51, 12, 22, 32, 42, 42, 52, 13, 23, 33, 43, 53, 14, 24, 34, 44, 54, 15, 25, 35, 45, 55];
    const result = [];

    if (encode === true) {
      input = input.toLowerCase().split('');
      input.forEach((char, index) => {
        if (alphabet.includes(char)) {
          alphabet.find((letter, index) => {
            if (char === letter) {
              number = polybius[index];
              result.push(number);
            }
          });
        } else {
          result.push(char);
      }});
      return result.join('');
    } else {
      input = input.split(' ');
      if (input.join('').length %2 === 1) { return false };
      input.forEach((word) => {
        word = word.match(/(..?)/g);
        let newWord = [];
          word.forEach((set) => {
            if (Number(set) === 42) {
              newWord.push(`(i/j)`);
            } else {
              polybius.find((match, index) => {
                if (Number(set) === match) {
                  newWord.push(alphabet[index]);
                }
              });
            }  
          });
          result.push(newWord.join(''));
        });
        return result.join(' ');
      }  
    }
  return {
    polybius,
  };
  
  
})();



module.exports = { polybius: polybiusModule.polybius };