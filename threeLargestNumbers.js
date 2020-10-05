/**
 *
 * @param {Array} array
 *
 * Time O(n)
 * Space O(1)
 */
const solutionA = (array) => {
  if (!Array.isArray(array) && !array.length) {
    return [];
  }

  const results = [];

  for (const number of array) {
    if (results[2] === undefined || number > results[2]) {
      shiftAndUpdate(results, number, 2);
    } else if (results[1] === undefined || number > results[1]) {
      shiftAndUpdate(results, number, 1);
    } else if (results[0] === undefined || number > results[0]) {
      shiftAndUpdate(results, number, 0);
    }
  }

  return results;
};

const shiftAndUpdate = (array, number, index) => {
  for (i = 0; i < index + 1; i++) {
    if (i === index) {
      array[i] = number;
    } else {
      array[i] = array[i + 1];
    }
  }
};