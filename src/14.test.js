/**
 * @overview This problem was asked by Google.
 *
 * The area of a circle is defined as πr². Estimate π to 3 decimal places using
 * a Monte Carlo method.
 *
 * Hint: The basic equation of a circle is x² + y² = r².
 */

const solve = require("./14");

test("the π estimation to be more than 99.9% accurate", () => {
  const result = solve();
  const expected = parseFloat(Math.PI.toFixed(3));
  const diff = Math.abs(expected - result);
  const accuracy = 100 - diff;

  expect(accuracy).toBeGreaterThan(99.9);
});
