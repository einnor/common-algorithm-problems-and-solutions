/**
 *
 * @param {BST} tree
 *
 * Time O(n)
 * Space O(n), at some point the queue will hold all the leaf nodes, aand the number of leaf nodes is ~ n/2
 */
const solutionA = (tree) => {
  const queue = [tree];
  while (queue.length) {
    const current = queue.shift();
    if (current === null) {
      continue;
    }
    swapLeftAndRight(current);
    queue.push(current.left);
    queue.push(current.right);
  }
};

const swapLeftAndRight = (tree) => {
  const temp = tree.right;
  tree.right = tree.left;
  tree.left = temp;
};
