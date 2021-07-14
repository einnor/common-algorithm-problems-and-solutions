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

/**
 *
 * @param {Matrix} grid
 *
 * Time O(n)
 * Space O(n)
 */
const solutionB = (grid) => {
  let count = 0;

  // Flatten the grid to a 1D array
  const flatGrid = [].concat.apply([], grid);

  for (num of flatGrid) {
    if (Math.sign(grid[i][j]) === -1) {
      count += 1;
    }
  }

  return count;
};
