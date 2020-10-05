/**
 *
 * @param {String} str
 *
 * Time O(n)
 * Space O(n)
 */
const solutionA = (str) => {
  let reversedStrArray = []
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStrArray.push(str[i]);
  }

  return str === reversedStrArray.join('');
};

/**
 *
 * @param {String} str
 *
 * Time O(n)
 * Space O(n)
 */
const solutionB = (str) => {
  return isPalindromeRecursion(str);
};

const isPalindromeRecursion = (str, firstCharacterIndex = 0) => {
  const lastCharacterIndex = str.length - 1 - firstCharacterIndex;
  if (firstCharacterIndex >= lastCharacterIndex) {
    return true;
  }
  if (str[firstCharacterIndex] !== str[lastCharacterIndex]) {
    return false;
  }
  return isPalindromeRecursion(str, firstCharacterIndex + 1);
};
