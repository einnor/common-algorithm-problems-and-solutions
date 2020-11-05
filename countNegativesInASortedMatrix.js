/**
 *
 * @param {Matrix} grid
 *
 * Time O(mn)
 * Space O(1)
 */
const solutionA = (grid) => {
  let count = 0;

  for (let i = grid.length - 1; i >= 0; i--) {
    for (let j = grid[0].length - 1; j >= 0; j--) {
      if (Math.sign(grid[i][j]) === -1) {
        count += 1;
      } else {
        break;
      }
    }
  }

  return count;
};

