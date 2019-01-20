/**
 * Returns the maximum values of each subarray of length k
 *
 * @param {number[]} integers
 * @param {number} k
 * @returns {number[]}
 */
module.exports = (integers, k) => {
  const results = [];

  for (let i = 0; i < integers.length - k + 1; i++) {
    results.push(Math.max(...integers.slice(i, i + k)));
  }

  return results;
};
