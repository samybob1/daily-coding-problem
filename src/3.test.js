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
