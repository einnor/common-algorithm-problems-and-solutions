/**
 *
 * @param {BST} tree
 * @param {Array} array
 *
 * Time O(n)
 * Space O(n) because we are storing everything in an array
 */
const inOrderTraverse = (tree, array) => {
  if (tree !== null) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }
  return array;
};

/**
 *
 * @param {BST} tree
 * @param {Array} array
 *
 * Time O(n)
 * Space O(n) because we are storing everything in an array
 */
const preOrderTraverse(tree, array) => {
  if (tree !== null) {
    array.push(tree.value);
    preOrderTraverse(tree.left, array);
    preOrderTraverse(tree.right, array);
  }
  return array;
};

/**
 *
 * @param {BST} tree
 * @param {Array} array
 *
 * Time O(n)
 * Space O(n) because we are storing everything in an array
 */
const postOrderTraverse(tree, array) => {
  if (tree !== null) {
    postOrderTraverse(tree.left, array);
    postOrderTraverse(tree.right, array);
    array.push(tree.value);
  }
  return array;
};
