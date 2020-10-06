class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  };

  /**
   *
   * @param {Number} value
   *
   * Average: O(logn) time | O(1) space
   * Worst:  O(n) time | O(1) space
   */
  insert(value) {
    let currentNode = this;
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new BST(value);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BST(value);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return this;
  };
};
