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

/**
 *
 * @param {BST} tree
 *
 * Time O(n)
 * Space O(d), where d is the depth of the tree. The highest number of frames in the call stack is going to amount to the depth of the tree
 */
const solutionB = (tree) => {
  if (tree == null) {
    return;
  }
  solutionB(tree.left);
  solutionB(tree.right);
};
