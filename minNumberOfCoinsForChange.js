/**
 *
 * @param {Number} n
 * @param {Array of Numbers} denominations
 *
 * Time O(nd) where d is the length of the denominations array
 * Space O(n)
 */
const solution = (n, denominations) => {
  const numberOfCoins = Array.from(Array(n + 1).keys()).map(() => Infinity);
  numberOfCoins[0] = 0;
  for (const denom of denominations) {
    for (let amount = 1; amount <= n; amount++) {
      if (denom <= amount) {
        numberOfCoins[amount] = Math.min(numberOfCoins[amount], 1 + numberOfCoins[amount - denom]);
      }
    }
  }

  return numberOfCoins[n] === Infinity ? -1 : numberOfCoins[n];
};
