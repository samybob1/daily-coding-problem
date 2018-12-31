/**
 * @overview This problem was asked by Google.
 *
 * Given the root to a binary tree, implement serialize(root), which serializes
 * the tree into a string, and deserialize(s), which deserializes the string
 * back into the tree.
 *
 * For example, given the following Node class
 *
 * class Node:
 *     def __init__(self, val, left=None, right=None):
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *
 * The following test should pass:
 *
 * node = Node('root', Node('left', Node('left.left')), Node('right'))
 * assert deserialize(serialize(node)).left.left.val == 'left.left'
 */

const { Node, serialize, deserialize } = require("./3");

const root = new Node(
  "root",
  new Node("left", new Node("left.left")),
  new Node("right")
);

const serialized = "root;left;left.left;null;null;null;right;null;null;";

test("tree to serialize", () => {
  const result = serialize(root);
  expect(result).toEqual(serialized);
});

test("tree to deserialize", () => {
  const result = deserialize(serialized);
  expect(result).toEqual(root);
});

test("tree to reserialize", () => {
  const tree = deserialize(serialized);
  const result = serialize(tree);
  expect(result).toEqual(serialized);
});

test('root.left.left.val to equal "left.left"', () => {
  const result = deserialize(serialized);
  expect(result.left.left.val).toEqual("left.left");
});
