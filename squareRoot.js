/**
 *
 * @param {Integer} n
 *
 * Time O(√n)
 * Space O(1)
 */
const solutionA = (n) => {
  // Base cases
  if (n === 0 || n === 1) {
    return n;
  }

  let i = 1;
  let result = 1;
  while (result <= n) {
    i += 1;
    result = i * i;
  }

  return i - 1;
};

/**
 *
 * @param {Integer} n
 *
 * Time O(logn)
 * Space O(1)
 */
const solutionB = (n) => {
  // Base cases
  if (n === 0 || n === 1) {
    return n;
  }

  // Binary Search
  let start = 1;
  let end = n;
  let answer;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    // If n is a perfect square
    if (mid * mid === n) {
      return mid;
    }

    if (mid * mid < n) {
      start = mid + 1;
      answer = mid;
    } else {
      end = mid - 1;
    }
  }
  return answer;
};
