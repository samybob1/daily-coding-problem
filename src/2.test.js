const solve = require("./2");

test("integers [1, 2, 3, 4, 5] to output [120, 60, 40, 30, 24]", () => {
  const result = solve([1, 2, 3, 4, 5]);
  expect(result).toEqual([120, 60, 40, 30, 24]);
});

test("integers [3, 2, 1] to output [2, 3, 6]", () => {
  const result = solve([3, 2, 1]);
  expect(result).toEqual([2, 3, 6]);
});
