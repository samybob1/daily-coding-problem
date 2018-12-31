/**
 * XOR linked list
 */
class XORLinkedList {
  /**
   * @constructor
   */
  constructor() {
    this.head = 0;
    this.tail = 0;
    this.length = 0;
  }

  /**
   * Adds the element to the end
   *
   * @param {*} element
   */
  add(element) {
    const node = new Node(element);
    const address = getPointer(node);

    if (this.length) {
      const tail = dereferencePointer(this.tail);
      tail.both = tail.both ^ address;
      node.both = this.tail;
      this.tail = address;
    } else {
      node.both = 0;
      this.head = address;
      this.tail = address;
    }

    this.length++;
  }

  /**
   * Returns the node at index
   *
   * @param {number} index
   * @returns {Node|null}
   */
  get(index) {
    let prev = 0;
    let address = this.head;
    let node = dereferencePointer(address);
    let next = prev ^ node.both;

    for (let i = 0; i < index; i++) {
      prev = address;
      address = next;
      node = dereferencePointer(address);
      next = prev ^ node.both;
    }

    return node;
  }
}

/**
 * XOR linked list node
 */
class Node {
  /**
   * @constructor
   * @param {*} val
   */
  constructor(val) {
    this.val = val;
    this.both = null;
    registerNode(this);
  }
}

/**
 * Fake memory
 *
 * @type {Map<number, Node>}
 */
const memory = new Map();

/**
 * Registers a node into the fake memory
 *
 * @param {Node} node
 */
const registerNode = node => {
  let address = 1;

  while (memory.has(address)) {
    address++;
  }

  memory.set(address, node);
};

/**
 * Returns the fake memory address of a node
 *
 * @param {Node} node
 * @returns {number}
 */
const getPointer = node => {
  const iterator = memory.entries();
  let value = null;

  do {
    value = iterator.next().value;

    if (value && value[1] === node) {
      return value[0];
    }
  } while (value);

  return 0;
};

/**
 * Returns the node associated to a fake memory address
 *
 * @param {number} address
 * @returns {Node}
 */
const dereferencePointer = address => memory.get(address);

module.exports = { XORLinkedList };
