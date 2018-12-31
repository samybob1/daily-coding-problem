/**
 * @overview This problem was asked by Google.
 *
 * A unival tree (which stands for "universal value") is a tree where all nodes
 * under it have the same value.
 *
 * Given the root to a binary tree, count the number of unival subtrees.
 *
 * For example, the following tree has 5 unival subtrees:
 *
 *       0
 *      / \
 *     1   0
 *    / \
 *   1   0
 *  / \
 * 1   1
 *
 */

const { Node, solve } = require("./8");

const tree = new Node(
  0,
  new Node(1),
  new Node(0, new Node(1, new Node(1), new Node(1)), new Node(0))
);

test("tree to have 5 unival subtrees", () => {
  const result = solve(tree);
  expect(result).toBe(5);
});
