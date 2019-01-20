/**
 * Returns the length of the longest absolute path to a file in the abstracted
 * file system
 *
 * @param {string} fs - File system
 * @returns {number}
 */
module.exports = fs => {
  const queue = buildTrees(fs);
  let result = 0;

  while (queue.length) {
    const node = queue.shift();

    if (node.isLeaf()) {
      const path = node.getPath();

      if (path.length > result) {
        result = path.length;
      }
    } else {
      node.children.forEach(child => {
        queue.push(child);
      });
    }
  }

  return result;
};

/**
 * Builds the trees
 *
 * @param {string} fs - File system
 * @returns {Node[]}
 */
function buildTrees(fs) {
  const heads = [];

  if (!fs) {
    return heads;
  }

  let currentNode = null;
  let currentLevel = null;

  fs.split("\n").forEach(row => {
    let level = 0;

    while (row.startsWith("\t")) {
      level++;
      row = row.substr(1);
    }

    const node = new Node(row);

    // Root node
    if (level === 0) {
      heads.push(node);
    }

    // Same level node
    else if (level === currentLevel) {
      node.setParent(currentNode.parent);
    }

    // Child node
    else if (level > currentLevel) {
      node.setParent(currentNode);
    }

    // Child of a parent node
    else {
      do {
        currentNode = currentNode.parent;
        currentLevel--;
      } while (currentLevel !== level);

      node.setParent(currentNode.parent);
    }

    currentNode = node;
    currentLevel = level;
  });

  return heads;
}

/**
 * Tree node
 */
class Node {
  /**
   * @constructor
   * @param {string} val - Node value
   */
  constructor(val) {
    this.val = val;
    this.children = [];
    this.parent = null;
  }

  /**
   * Sets parent node bidirectionally
   *
   * @param {Node} parent
   */
  setParent(parent) {
    this.parent = parent;
    parent.children.push(this);
  }

  /**
   * Returns true if the node is a leaf node
   *
   * @returns {boolean}
   */
  isLeaf() {
    return this.val.includes(".");
  }

  /**
   * Returns true if the node is a root node
   *
   * @returns {boolean}
   */
  isRoot() {
    return this.parent === null;
  }

  /**
   * Returns the absolute path to the node
   *
   * @returns {string}
   */
  getPath() {
    return this.isRoot() ? this.val : `${this.parent.getPath()}/${this.val}`;
  }
}
