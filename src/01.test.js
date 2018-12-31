/**
 * @overview This problem was recently asked by Google.
 *
 * Given a list of numbers and a number k, return whether any two numbers from
 * the list add up to k.
 *
 * For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is
 * 17.
 *
 * Bonus: Can you do this in one pass?
 */

const solve = require("./1");

test("list [10, 15, 3, 7] to contain two numbers that add up to 17", () => {
  const result = solve([10, 15, 3, 7], 17);
  expect(result).toBe(true);
});

test("list [82, 7, 28, 3] to contain two numbers that add up to 35", () => {
  const result = solve([82, 7, 28, 3], 35);
  expect(result).toBe(true);
});

test("list [13, 1, 82, 9] to not contain two numbers that add up to 20", () => {
  const result = solve([13, 1, 82, 9], 20);
  expect(result).toBe(false);
});

test("list [5, 120, 2, 3] to not contain two numbers that add up to 99", () => {
  const result = solve([5, 120, 2, 3], 99);
  expect(result).toBe(false);
});
