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
