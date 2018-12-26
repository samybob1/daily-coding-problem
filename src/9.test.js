const solve = require("./9");

test("integers [2, 4, 6, 2, 5] to output 13", () => {
  const result = solve([2, 4, 6, 2, 5]);
  expect(result).toBe(13);
});

test("integers [5, 1, 1, 5] to output 10", () => {
  const result = solve([5, 1, 1, 5]);
  expect(result).toBe(10);
});
