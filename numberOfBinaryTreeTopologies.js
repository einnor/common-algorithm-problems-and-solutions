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
    numberOfLeftTrees = solution(leftTreeSize);
    numberOfRightTrees = solution(rightTreeSize);
    numberOfTopologies += numberOfLeftTrees * numberOfRightTrees;
  }

  return numberOfTopologies;
};
