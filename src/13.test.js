/**
 * @overview This problem was asked by Amazon.
 *
 * Given an integer k and a string s, find the length of the longest substring
 * that contains at most k distinct characters.
 *
 * For example, given s = "abcba" and k = 2, the longest substring with k
 * distinct characters is "bcb".
 */

const solve = require("./13");

test("the length of the longest substring with at most 2 distinct characters to be 3", () => {
  const result = solve("abcba", 2);
  expect(result).toBe(3);
});

test("the length of the longest substring with at most 5 distinct characters to be 5", () => {
  const result = solve("abcba", 5);
  expect(result).toBe(5);
});

test("the length of the longest substring with at most 1 distinct characters to be 3", () => {
  const result = solve("aaa", 1);
  expect(result).toBe(3);
});

test("the length of the longest substring with at most 10 distinct characters to be 18", () => {
  const result = solve("loremipsumdolorsitametconsecteturadipiscingelit", 10);
  expect(result).toBe(18);
});
