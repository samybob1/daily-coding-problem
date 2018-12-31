/**
 * @overview This problem was asked by Jane Street.
 *
 * cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first
 * and last element of that pair. For example, car(cons(3, 4)) returns 3, and
 * cdr(cons(3, 4)) returns 4.
 *
 * Given this implementation of cons:
 *
 * def cons(a, b):
 *     def pair(f):
 *         return f(a, b)
 *     return pair
 *
 * Implement car and cdr.
 */

const { cons, car, cdr } = require("./5");

test("car(cons(3, 4) to return 3", () => {
  const result = car(cons(3, 4));
  expect(result).toBe(3);
});

test("cdr(cons(3, 4) to return 4", () => {
  const result = cdr(cons(3, 4));
  expect(result).toBe(4);
});
