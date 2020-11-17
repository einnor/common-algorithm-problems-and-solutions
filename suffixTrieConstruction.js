class SuffixTree {
  constructor(str) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(str);
  }

  populateSuffixTrieFrom(str) {
    for (let i = 0; i < str.length; i++) {
      this.insertSubstringStartingAt(i, str);
    }
  }

  constains(str) {
    let node = this.root;
    for (letter of str) {
      if (!(letter in node))  {
        return false;
      }
      node = node[letter];
    }
    return this.endSymbol in node;
  }

  insertSubstringStartingAt(i, str) {
    let node = this.root;
    for (let j = i; j < str.length; j++) {
      const letter = str[j];
      if (!(letter in node)) {
        node[letter] = {};
      }
      node = node[letter];
    }
    node[this.endSymbol] = true;
  }
}
