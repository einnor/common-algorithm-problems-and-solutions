/**
 *
 * @param {Array of + Numbers} array
 *
 * Time O(n)
 * Space O(n)
 */
const solutionA = (array) => {
  if (!array.length) {
    return;
  }
  if (array.length === 1) {
    return array[0];
  }
  let maxSums = [...array];
  maxSums[1] = Math.max(array[0], array[1]);
  for (let i = 2; i < array.length; i++) {
    maxSums[i] = Mat.max(maxSums[i - 1], maxSums[i - 2] + array[i]);
  }

  return maxSums[maxSums.length - 1];
};

/**
 *
 * @param {Array of + Numbers} array
 *
 * Time O(n)
 * Space O(1)
 */
const solutionB = (array) => {
  if (!array.length) {
    return;
  }
  if (array.length === 1) {
    return array[0];
  }
  let second = array[0];
  let first = Math.max(array[0], array[1]);
  for (let i = 2; i < array.length; i++) {
    const current = Math.max(first, second + array[i]);
    second = first;
    first = current;
  }

  return first;
};
