/**
 * Returns the intersecting node of two linked lists
 *
 * @param {Node} a
 * @param {Node} b
 * @returns {Node|null}
 */
const solve = (a, b) => {
  const nodes = new Set();
  let current = a;

  while (current) {
    nodes.add(current);
    current = current.next;
  }

  current = b;

  while (current) {
    if (nodes.has(current)) {
      return current;
    }

    current = current.next;
  }

  return null;
};

/**
 * Linked list node
 */
class Node {
  /**
   * @constructor
   * @param {*} val - Node value
   * @param {Node} [next=null] - Next node
   */
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

module.exports = { solve, Node };
