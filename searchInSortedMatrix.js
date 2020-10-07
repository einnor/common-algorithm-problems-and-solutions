/**
 *
 * @param {Matrix} matrix
 * @param {Number} target
 *
 * Time O(n + m), where n is number of rows and m is number of columns
 * Space O(1)
 */
const solution = (matrix, target) => {
  let row = 0;
  let col = matrix[0].length - 1;
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] > target) {
      col--;
    } else if (matrix[row][col] < target) {
      row++;
    } else {
      return [row, col];
    }
  }
  return [-1, -1];
};
