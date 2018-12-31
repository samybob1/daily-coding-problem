/**
 * @overview This problem was asked by Apple.
 *
 * Implement a job scheduler which takes in a function f and an integer n, and
 * calls f after n milliseconds.
 */

const solve = require("./10");

jest.useFakeTimers();

test("function f to have been called after 1s", () => {
  const f = jest.fn();
  solve(f, 1000);

  jest.advanceTimersByTime(999);
  expect(f).not.toHaveBeenCalled();

  jest.advanceTimersByTime(1);
  expect(f).toHaveBeenCalled();
});
