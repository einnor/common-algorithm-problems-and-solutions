/**
 *
 * @param {Array} array
 *
 * Time O(n!n^2)
 * Space O(n!n)
 */
const solutionA = (array) => {
  const permutations = [];

  helper(array, [], permutations);

  return permutations;
};

const helper = (array, currentPermutation, permutations) => {
  if (!array.length && currentPermutation.length) {
    permutations.push(currentPermutation);
  } else {
    for (let i = 0; i < array.length; i++) {
      const newArray = array.slice(0, i).concat(array.slice(i + 1));
      const newPermutation = currentPermutation + [array[i]];
      helper(newArray, newPermutation, permutations);
    }
  }
};

/**
 *
 * @param {Array} array
 *
 * Time O(n!n)
 * Space O(n!n)
 */
const solutionB = (array) => {
  const permutations = [];

  helperB(0, array, permutations);

  return permutations;
};

const helperB = (i, array, permutations) => {
  if (i === array.length - 1) {
    permutations.push(array);
  } else {
    for (let j = i; j < array.length - 1; j++) {
      swap(array, i, j);
      helperB(i + 1, array, permutations);
      swap(array, i, j);
    }
  }
};

const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};
