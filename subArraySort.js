/**
 *
 * @param {Array} array
 *
 * Time O(n)
 * Space O(1)
 */
const solution = (array) => {
  let minOutOfOder = Infinity;
  let maxOutOfOrder = -Infinity;

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (isOutOfOrder(i, num, array)) {
      minOutOfOder = Math.min(minOutOfOder, num);
      maxOutOfOrder = Math.max(maxOutOfOrder, num);
    }
  }

  if (minOutOfOder === Infinity && maxOutOfOrder === -Infinity) {
    return [-1, -1];
  }

  let subArrayLeftIdx = 0;
  while (minOutOfOder >= array[subArrayLeftIdx]) {
    subArrayLeftIdx += 1;
  }

  let subArrayRightIdx = array.length - 1;
  while (maxOutOfOrder <= array[subArrayRightIdx]) {
    subArrayRightIdx -= 1;
  }

  return [subArrayLeftIdx, subArrayRightIdx];
};

const isOutOfOrder = (i, num, array) => {
  if (i === 0) {
    return num > array[i + 1];
  }
  if (i === array.length - 1) {
    return num < array[i - 1];
  }

  return num > array[i + 1] || num < array[i - 1];
};
