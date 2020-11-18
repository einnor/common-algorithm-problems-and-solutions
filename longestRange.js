const solution = (array) => {
  let bestRange = [];
  let longestLength = 0;
  const nums = {};
  for (const num of array) {
    nums[num] = true;
  }
  for (const num of array) {
    if (nums[num]) {
      nums[num] = false;
      let currentLength = 1;
      let left = num - 1;
      let right = num + 1;
      while (left in nums) {
        nums[left] = false;
        currentLength += 1;
        left -= 1;
      }
      while (right in nums) {
        nums[right] = false;
        currentLength += 1;
        right -= 1;
      }
      if (currentLength > longestLength) {
        longestLength = currentLength;
        bestRange = [left + 1, right - 1];
      }
    }
  }

  return bestRange;
};
