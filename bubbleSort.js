/**
 *
 * @param {Array} array
 * Time O(n^2)
 * Space O(1)
 */
const solution = (array) => {
  let isSorted = false;
  let sortedCounter = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - sortedCounter; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        isSorted = false;
      }
    }
    sortedCounter--;
  }

  return array;
};

const swap = (i, j, array) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};