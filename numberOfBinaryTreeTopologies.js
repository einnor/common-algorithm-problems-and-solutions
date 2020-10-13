/**
 *
 * @param {Number} n
 *
 * Time O((n*(2n)?/(n!(n+1)!)))
 * Space O(n)
 */
const solutionA = (n) => {
  if (n === 0) {
    return 1;
  }
  let numberOfTopologies = 0;
  for (let leftTreeSize = 0; leftTreeSize < n; leftTreeSize++) {
    const rightTreeSize = n - 1 - leftTreeSize;
    numberOfLeftTrees = solutionA(leftTreeSize);
    numberOfRightTrees = solutionA(rightTreeSize);
    numberOfTopologies += numberOfLeftTrees * numberOfRightTrees;
  }

  return numberOfTopologies;
};

/**
 *
 * @param {Number} n
 *
 * Time O(n^2)
 * Space O(n)
 */
const solutionB = (n, cache = { 0: 1 }) => {
  if (n in cache) {
    return cache[n];
  }
  let numberOfTopologies = 0;
  for (let leftTreeSize = 0; leftTreeSize < n; leftTreeSize++) {
    const rightTreeSize = n - 1 - leftTreeSize;
    numberOfLeftTrees = solutionB(leftTreeSize, cache);
    numberOfRightTrees = solutionB(rightTreeSize, cache);
    numberOfTopologies += numberOfLeftTrees * numberOfRightTrees;
  }
  cache[n] = numberOfTopologies;

  return numberOfTopologies;
};
