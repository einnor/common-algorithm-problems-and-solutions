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
