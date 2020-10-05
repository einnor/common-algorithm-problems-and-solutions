/**
 *
 * @param {String} str
 * @param {Number} key
 *
 * Time O(n)
 * Space O(n)
 */
const solutionA = (str, key) => {
  const newLetters = [];
  const newKey = key % 26;
  for (const letter of str) {
    const newLetter = getNewLetter(letter, newKey);
    newLetters.push(newLetter);
  }

  return newLetters.join('');
};

const getNewLetter = (letter, key) => {
  const newLetterCode = letter.charCodeAt(0) + key;
  if (newLetterCode <= 122) {
    return String.fromCharCode(newLetterCode);
  }
  return String.fromCharCode(96 + newLetterCode % 122);
};

/**
 *
 * @param {String} str
 * @param {Number} key
 *
 * Time O(n)
 * Space O(n)
 */
const solutionB = (str, key) => {
  const newLetters = [];
  const newKey = key % 26;
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (const letter of str) {
    const newLetter = getNewLetterFromAlphabet(letter, newKey, alphabet);
    newLetters.push(newLetter);
  }

  return newLetters.join('');
};

const getNewLetterFromAlphabet = (letter, key, alphabet) => {
  const newLetterCode = alphabet.indexOf(letter) + key;
  if (newLetterCode <= 25) {
    return alphabet[newLetterCode];
  }
  return alphabet[-1 + newLetterCode % 25];
};
