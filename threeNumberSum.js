/**
 *
 * @param {Array} array
 * @param {Number} targetSum
 *
 * Time O(n^2)
 * Space O(n)
 */
const solution = (array, targetSum) => {
  array.sort();
  const triplets = [];

  for (let i = 0; i < array.length - 2; i++) {
    let leftIndex = i + 1;
    let rightIndex = array.length - 1;
    while (leftIndex < rightIndex) {
      const currentSum = array[i] + array[leftIndex] + array[rightIndex];
      if (currentSum === targetSum) {
        triplets.push([array[i], array[leftIndex], array[rightIndex]]);
        leftIndex++;
        rightIndex++;
      } else if (currentSum < targetSum) {
        leftIndex++;
      } else if (currentSum > targetSum) {
        rightIndex--;
      }
    }
  }

  return triplets;
};
