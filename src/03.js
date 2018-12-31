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
}

/**
 * Serializes the tree into a string
 *
 * @param {Node|null} root - The root to a binary tree
 * @returns {string}
 */
const serialize = root => {
  let output = "";

  if (root) {
    output += `${root.val};`;
    output += serialize(root.left);
    output += serialize(root.right);
  } else {
    output += "null;";
  }

  return output;
};

/**
 * Deserializes the string back into the tree
 *
 * @param {string} serialized
 * @returns {Node|null}
 */
const deserialize = serialized => {
  const values = serialized.slice(0, -1).split(";");
  let index = 0;

  const read = () => {
    if (values[index] === "null") {
      index++;
      return null;
    }

    return new Node(values[index++], read(index), read(index));
  };

  return read();
};

module.exports = { Node, serialize, deserialize };
