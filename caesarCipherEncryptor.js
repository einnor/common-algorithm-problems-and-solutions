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
  console.log(newLetterCode);
  if (newLetterCode <= 122) {
    return String.fromCharCode(newLetterCode);
  }
  return String.fromCharCode(96 + newLetterCode % 122);
};
