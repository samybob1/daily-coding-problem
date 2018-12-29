/**
 * Binary tree node
 */
class Node {
  /**
   * @constructor
   * @param {*} val - Node value
   * @param {Node} [left=null]
   * @param {Node} [right=null]
   */
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /**
   * Returns true if all nodes under the node have the same value.
   *
   * @param val
   * @returns {boolean}
   */
  isUnival(val = this.val) {
    if (this.left && this.right) {
      return this.left.isUnival(val) && this.right.isUnival(val);
    }

    if (this.left) {
      return this.left.isUnival(val);
    }

    if (this.right) {
      return this.right.isUnival(val);
    }

    return this.val === val;
  }
}

/**
 * Counts the number of unival subtrees.
 *
 * @param root - Root to a binary tree
 * @returns {number}
 */
const solve = root => {
  const queue = [root];
  let total = 0;

  while (queue.length) {
    const tree = queue.shift();

    if (tree.isUnival()) {
      total++;
    }

    if (tree.left) {
      queue.push(tree.left);
    }

    if (tree.right) {
      queue.push(tree.right);
    }
  }

  return total;
};

module.exports = { Node, solve };
