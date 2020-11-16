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
