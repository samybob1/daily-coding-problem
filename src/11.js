/**
 * Tree node
 *
 * @typedef {Map<char, Node>} Node
 */

/**
 * Returns all strings in the set that have s as a prefix
 *
 * @param {string} s
 * @param {string[]} strings
 * @returns {string[]}
 */
module.exports = (s, strings) => {
  const tree = new Map();

  // Save strings into the tree
  strings.forEach(string => {
    let node = tree;

    for (const char of string) {
      if (node.has(char)) {
        node = node.get(char);
      } else {
        const child = new Map();
        node.set(char, child);
        node = child;
      }
    }
  });

  // Read results from the tree
  let node = tree;

  for (const char of s) {
    if (node.has(char)) {
      node = node.get(char);
    } else {
      return [];
    }
  }

  return read(node).map(suffix => s + suffix);
};

/**
 * Returns all strings under a node
 *
 * @param {Node} node
 * @param {string} prefix
 * @returns {string[]}
 */
const read = (node, prefix = "") =>
  node.size === 0
    ? [prefix]
    : flatten(
        [...node.entries()].map(([char, child]) => read(child, prefix + char))
      );

/**
 * Flatten values
 *
 * @param {*[]} values
 * @returns {*[]}
 */
const flatten = values =>
  values.reduce(
    (output, input) =>
      output.concat(Array.isArray(input) ? flatten(input) : input),
    []
  );
