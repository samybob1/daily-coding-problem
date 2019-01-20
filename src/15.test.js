/**
 * @overview This problem was asked by Facebook.
 *
 * Given a stream of elements too large to store in memory, pick a random
 * element from the stream with uniform probability.
 */

const solve = require("./15");

test("returned element to be chose randomly with uniform probability", () => {
  const iterations = 500000;
  const length = 100;
  const optimal = iterations / length;
  const max = optimal * 0.1;

  const elements = Array.from({ length }, (_, i) => i);
  const distribution = new Map(elements.map(element => [element, 0]));

  for (let i = 0; i < iterations; i++) {
    const result = solve(elements);
    distribution.set(result, distribution.get(result) + 1);
  }

  const results = Array.from(distribution.values());
  const valid = results.every(result => Math.abs(optimal - result) < max);

  expect(valid).toBe(true);
});
