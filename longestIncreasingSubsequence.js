/**
 *
 * @param {Array} array
 *
 * Time O(n^2)
 * Space O(n)
 */
const solutionA = (array) => {
  const sequences = Array.from(Array(array.length).keys()).map(() => null);
  const lengths = Array.from(Array(array.length).keys()).map(() => 1);
  let maxLengthIdx = 0;

  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];

    for (let j = 0; j < i; j++) {
      let otherNum = array[j];

      if (otherNum < currentNum && lengths[j] + 1 >= lengths[i]) {
        length[i] = lengths[j] + 1;
        sequences[i] = j;
      }
    }

    if (lengths[i] >= lengths[maxLengthIdx]) {
      maxLengthIdx = i;
    }
  }

  return buildSequence(array, sequences, maxLengthIdx);
};

const buildSequence = (array, sequences, currentIdx) => {
  const sequence = [];
  while (currentIdx !== null) {
    sequence.push(array[currentIdx]);
    currentIdx = sequences[currentIdx];
  }

  return sequence.reverse();
};

/**
 *
 * @param {Array} array
 *
 * Time O(nlogn)
 * Spacce O(n)
 */
const solutionB = (array) => {
  const sequences = Array.from(Array(array.length).keys()).map(() => null);
  const indices = Array.from(Array(array.length + 1).keys()).map(() => null);
  let length = 0;

  array.forEach((num, i) => {
    const newLength = binarySearch(1, length, indices, array, num);
    sequences[i] = indices[newLength - 1];
    indices[newLength] = i;
    length = Math.max(length, newLength);
  });

  return buildSequence(array, sequences, indices[length]);
};

const binarySearch = (startIdx, endIdx, indices, array, num) => {
  if (startIdx > endIdx) {
    return startIdx;
  }

  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  if (array[indices[middleIdx]] < num) {
    startIdx = middleIdx + 1;
  } else {
    endIdx = middleIdx - 1;
  }
  return binarySearch(startIdx, endIdx, indices, num);
};
