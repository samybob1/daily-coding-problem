/**
 * @overview This problem was asked by Google.
 *
 * Given two singly linked lists that intersect at some point, find the
 * intersecting node. The lists are non-cyclical.
 *
 * For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return
 * the node with value 8.
 *
 * In this example, assume nodes with the same value are the exact same node
 * objects.
 *
 * Do this in O(M + N) time (where M and N are the lengths of the lists) and
 * constant space.
 */

const { solve, Node } = require("./20");

const c = new Node(8, new Node(10));
const a = new Node(3, new Node(7, c));
const b = new Node(99, new Node(1, c));

test("intersecting node to be node 8", () => {
  const result = solve(a, b);
  expect(result).toBe(c);
});
