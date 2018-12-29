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
