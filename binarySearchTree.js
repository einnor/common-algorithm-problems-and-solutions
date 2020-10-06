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

  /**
   *
   * @param {Number} value
   *
   * Average: O(logn) time | O(1) space
   * Worst:  O(n) time | O(1) space
   */
  contains(value) {
    let currentNode = this;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  };

  /**
   *
   * @param {Number} value
   * @param {Number} value
   *
   * Average: O(logn) time | O(1) space
   * Worst:  O(n) time | O(1) space
   */
  remove(value, parentNode = null) {
    let currentNode = this;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        // Searching left subtree
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        // Searching right subtree
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        // Matched
        // Node has left and right children
        if (currentNode.left !== null && currentNode.right !== null) {
          // currentNode.value = smallest value of right subtree
          currentNode.value = currentNode.right.getMinValue();
          currentNode.right.remove(currentNode.value, currentNode);
        } else if (parentNode === null) {
          if (currentNode.left !==  null) {
            currentNode.value = currentNode.left.value;
            currentNode.right =  currentNode.left.right;
            currentNode.left = currentNode.left.left;
          } else if (currentNode.right !== null) {
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right =  currentNode.right.right;
          } else {
            currentNode.value = null;
          }
        } else if (parentNode.left === currentNode) {
          if (currentNode.left !== null) {
            parentNode.left = currentNode.left
          } else {
            parentNode.left = currentNode.right;
          }
        } else if (parentNode.right === currentNode) {
          if (currentNode.left !== null) {
            parentNode.right = currentNode.left
          } else {
            parentNode.right = currentNode.right;
          }
        }
        break;
      }
    }
    return this;
  };


  /**
   *
   * Average: O(logn) time | O(1) space
   * Worst:  O(n) time | O(1) space
   */
  getMinValue() {
    let = currentNode = this;
    while (currentNode !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  };
};
