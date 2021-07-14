/**
 *
 * @param {Matrix} matrix
 *
 * Time O(w.h), where w is width and h is height of the matrix
 * Space O(w.h)
 */
const solution = (matrix) => {
  const sizes = [];
  const visited = matrix.map(row => {
    return row.map(value => false);
  });

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (visited[i][j]) {
        continue;
      }
      traverseNode(i, j, matrix, visited, sizes);
    }
  }

  return sizes;
};

const traverseNode = (i, j, matrix, visited, sizes) => {
  let currentRiverSize = 0;

  // Stack
  const nodesToExplore = [[i, j]];

  while (nodesToExplore.length) {
    let currentNode = nodesToExplore.pop();
    let x = currentNode[0];
    let y = currentNode[1];
    if (visited[x][y]) {
      continue;
    }
    visited[x][y] = true;
    if (matrix[x][y] === 0) {
      continue;
    }
    currentRiverSize += 1;
    const unvisitedNeighbours = getUnvisitedNeighbours(x, y, matrix, visited);
    for (const neighbour of unvisitedNeighbours) {
      nodesToExplore.push(neighbour);
    }
  }
  if (currentRiverSize > 0) {
    sizes.push(currentRiverSize);
  }
};

const getUnvisitedNeighbours = (i, j, matrix, visited) => {
  let unvisitedNeighbours = [];
  if (i > 0 && !visited[i - 1][j]) {
    unvisitedNeighbours.push([i - 1, j])
  }
  if (i < matrix.length - 1 && !visited[i + 1][j]) {
    unvisitedNeighbours.push([i + 1, j]);
  }
  if (j > 0 && !visited[i][j - 1]) {
    unvisitedNeighbours.push([i, j - 1])
  }
  if (j < matrix[0].length - 1 && !visited[i][j + 1]) {
    unvisitedNeighbours.push([i, j + 1]);
  }

  return unvisitedNeighbours;
};
