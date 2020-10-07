class Node {
  constructor(name) {
    this.children = [];
    this.name = name;
  }

  addChild(name) {
    this.children.push(new Node(name));
  }

  /**
   *
   * @param {Array} array
   *
   * Time O(v + e)
   * Space O(v)
   */
  breadthFirstSearch(array) {
    const queue = [this];
    while (queue.length) {
      const currentNode = queue.shift();
      array.push(currentNode.name);
      for (const child of currentNode.children) {
        queue.push(child);
      }
    }

    return array;
  }
}
