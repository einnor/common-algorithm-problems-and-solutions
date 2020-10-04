/**
  *
  * @param {Array} array
  * @param {Number} targetSum
  *
  * Time O(n^2)
  * Space O(1)
  */
const solutionA = (array, targetSum) => {
  if (!Array.isArray(array) && !array.length) {
    return [];
  }
  for (let i = 0; i < array.length - 1; i++) {
    const firstNumber = array[i];
    for (let j = i + 1; j < array.length; j ++) {
      const secondNumber = array[j];
      if (firstNumber + secondNumber === targetSum) {
        return [firstNumber, secondNumber];
      }
    }
  }

  return [];
};

/**
 *
 * @param {Array} array
 * @param {Number} targetSum
 *
 * Time O(n)
 * Space O(n)
 */
const solutionB = (array, targetSum) => {
  if (!Array.isArray(array) && !array.length) {
    return []
  }
  const numbers = {};
  for (const number of array) {
    const firstNumber = targetSum - number;
    if (numbers[firstNumber]) {
      return [firstNumber, number];
    } else {
      numbers[number] = true;
    }
  }

  return [];
};

/**
 *
 * @param {Array} array
 * @param {Number} targetSum
 *
 *  Time O(nlogn)
 * Space O(1)
 */
const solutionC = (array, targetSum) => {
  if (!Array.isArray(array) && !array.length) {
    return [];
  }

  array.sort();

  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while (leftPointer < rightPointer) {
    const firstNumber =  array[leftPointer];
    const secondNumber = array[rightPointer];
    const sum = firstNumber + secondNumber;
    if (sum == targetSum) {
      return [firstNumber, secondNumber];
    } else if (sum > targetSum) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }

  return [];
}