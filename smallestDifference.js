/**
 *
 * @param {Array} firstArray
 * @param {Array} secondArray
 *
 * Time O(nlogn + mlogm)
 * Space O(1)
 */
const solution = (firstArray, secondArray) => {
  firstArray.sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
  secondArray.sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
  let leftIndex = 0;
  let rightIndex = 0;
  let smallestDifference = Infinity;
  let smallestPair = [];

  while (leftIndex < firstArray.length && rightIndex < secondArray.length) {
    const firstNum = firstArray[leftIndex];
    const secondNum = secondArray[rightIndex];
    const currentDifference = Math.abs(firstNum - secondNum);

    if (firstNum < secondNum) {
      leftIndex++;
    } else if (firstNum > secondNum) {
      rightIndex++;
    } else {
      return [firstNum, secondNum];
    }

    if (smallestDifference > currentDifference) {
      smallestDifference = currentDifference;
      smallestPair = [firstNum, secondNum];
    }
  }

  return smallestPair;
};
