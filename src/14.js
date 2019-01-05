/**
 * Estimates π to 3 decimal places using a Monte Carlo method
 *
 * @param {number} [iterations=100000] - Number of iterations to run
 * @returns {number}
 */
module.exports = (iterations = 100000) => {
  const r = 1000;
  let inside = 0;

  for (let i = 0; i < iterations; i++) {
    const x = random(-r, r);
    const y = random(-r, r);
    const d = Math.sqrt(x ** 2 + y ** 2);

    if (d <= r) {
      inside++;
    }
  }

  const result = 4 * (inside / iterations);
  const formatted = result.toFixed(3);

  return parseFloat(formatted);
};

/**
 * Returns a random number between min (included) and max (included)
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
