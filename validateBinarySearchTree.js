/**
 *
 * @param {BST} tree
 *
 * Time O(n)
 * Space O(d) where d is the depth (d calls on the frames get used up at one point)
 */
const validateBST = (tree) => {
  return validateBSTHelper(tree, -Infinity, Infinity);
};

const validateBSTHelper = (tree, minValue, maxValue) => {
  if (tree === null) {
    return true;
  }
  if (tree.value < minValue || tree.value >= maxValue) {
    return false;
  }
  const isLeftSubTreeValid = validateBSTHelper(tree.left, minValue, tree.value);
  return isLeftSubTreeValid && validateBSTHelper(tree.right, tree.value, maxValue);
};
