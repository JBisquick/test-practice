function capitalize(string) {
  let first = string.substring(0, 1);
  let last = string.substring(1);
  return first.toUpperCase() + last;
}

function reverseString(string) {
  let reverse = '';
  for (const char of string) {
    reverse = char + reverse;
  }
  return reverse;
}

function calculator() {
  const add = (a, b) => {
    return a + b;
  };

  const subtract = (a, b) => {
    return a - b;
  };

  const divide = (a, b) => {
    return a / b;
  };

  const multiply = (a, b) => {
    return a * b;
  };

  return {
    add,
    subtract,
    divide,
    multiply
  };
}

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function caesarCipher(string, key) {
  let cipherString = '';
  for (const char of string) {
    const newChar = chipherChar(char, key);
    cipherString += newChar;
  }
  return cipherString;
}

function chipherChar(char, key) {
  if ((/[a-z\d]/i).test(char)) {
    const charIndex = alphabet.indexOf(char.toLowerCase());
    key += charIndex;
    key = key % 26;
    const letter = alphabet.at(key);
    if (char === char.toUpperCase()) {
      return letter.toUpperCase();
    }
    return letter;
  }

  return char;
}

function analyzeArray(array) {
  const average = array.reduce((accumulator, currentValue) => accumulator 
  + currentValue, 0) / array.length;
  const length = array.length;
  array.sort((a, b) => a - b);
  const min = array[0];
  const max = array[array.length - 1];
  return { average, length, max, min }
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };