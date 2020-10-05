/**
 *
 * @param {Array} array
 * Time O(n^2)
 * Space O(1)
 */
const solution = (array) => {
  let currentIndex = 0;
  while (currentIndex < array.length - 1) {
    let smallestIndex = currentIndex;
    for (let i = currentIndex + 1; i < array.length; i++) {
      if (array[smallestIndex] > array[i]) {
        smallestIndex = i;
      }
    }
    swap(currentIndex, smallestIndex, array);
    currentIndex++;
  }

  return array;
};

const swap = (i, j, array) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};
