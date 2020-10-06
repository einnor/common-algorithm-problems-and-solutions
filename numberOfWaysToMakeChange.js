/**
 *
 * @param {Number} n
 * @param {Array of Numbers} denominations
 *
 * Time O(nd) where d is the length of the denominations array
 * Space O(n)
 */
const solution = (n, denominations) => {
  const ways = Array.from(Array(n).keys()).map(() => 0);
  ways[0] = 1;
  for (const denom of denominations) {
    for (let amount = 1; amount <= n; amount++) {
      if (denom <= amount) {
        ways[amount] = ways[amount] + ways[amount - denom];
      }
    }
  }

  return ways[n];
};
