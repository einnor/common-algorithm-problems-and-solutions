const solution = (array) => {
  let sum = array.reduce((acc, cur) => acc + cur, 0);
  let subSum = 0;
  const subArray = [];

  // Sort the array
  array.sort((a, b) => a - b);

  for (let index = array.length - 1; index >= 0; i--) {
    if (sum >= subSum) {
      sum -= array[index];
      subSum += array[index];
      subArray.push(array[index]);
    } else {
      break;
    }
  }

  return subSum;
};
