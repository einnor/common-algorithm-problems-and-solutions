/**
 *
 * @param {Array} array
 *
 * Time O(n)
 * Space O(1)
 */
const solution = (array) => {
  let maxEndingHere = array[0];
  let maxSoFar = array[0];

  for (let i = 1; i < array.length; i++) {
    const number = array[i];
    maxEndingHere = Math.max(number, maxEndingHere + number);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
};
