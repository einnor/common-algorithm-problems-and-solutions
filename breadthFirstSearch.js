class Node {
  constructor(name) {
    this.children = [];
    this.name = name;
  }

  addChild(name) {
    this.children.push(new Node(name));
  }

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
