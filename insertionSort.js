/**
 *
 * @param {Array} array
 *
 * Best Time O(n)
 * Average Time O(mn)
 * Worst Time O(n^2)
 * Space O(1)
 */
const solution = (array) => {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j-1, array);
      j--;
    }
  }

  return array;
};

const swap = (i, j, array) => {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
};
