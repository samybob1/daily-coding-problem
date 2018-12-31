/**
 * @overview This problem was asked by Airbnb.
 *
 * Given a list of integers, write a function that returns the largest sum of
 * non-adjacent numbers. Numbers can be 0 or negative.
 *
 * For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5.
 * [5, 1, 1, 5] should return 10, since we pick 5 and 5.
 *
 * Follow-up: Can you do this in O(N) time and constant space?
 */

const solve = require("./09");

test("integers [2, 4, 6, 2, 5] to output 13", () => {
  const result = solve([2, 4, 6, 2, 5]);
  expect(result).toBe(13);
});

test("integers [5, 1, 1, 5] to output 10", () => {
  const result = solve([5, 1, 1, 5]);
  expect(result).toBe(10);
});
