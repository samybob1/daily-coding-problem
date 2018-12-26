const solve = require("./4");

test("integers [3, 4, -1, 1] to output 2", () => {
  const result = solve([3, 4, -1, 1]);
  expect(result).toBe(2);
});

test("integers [1, 2, 0] to output 3", () => {
  const result = solve([1, 2, 0]);
  expect(result).toBe(3);
});
