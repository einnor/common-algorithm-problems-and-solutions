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
