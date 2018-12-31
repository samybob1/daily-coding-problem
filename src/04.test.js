/**
 * @overview This problem was asked by Stripe.
 *
 * Given an array of integers, find the first missing positive integer in linear
 * time and constant space. In other words, find the lowest positive integer
 * that does not exist in the array. The array can contain duplicates and
 * negative numbers as well.
 *
 * For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0]
 * should give 3.
 *
 * You can modify the input array in-place.
 */

const solve = require("./04");

test("integers [3, 4, -1, 1] to output 2", () => {
  const result = solve([3, 4, -1, 1]);
  expect(result).toBe(2);
});

test("integers [1, 2, 0] to output 3", () => {
  const result = solve([1, 2, 0]);
  expect(result).toBe(3);
});
