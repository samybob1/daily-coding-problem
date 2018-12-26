/**
 * Given an array of integers, return a new array such that each element at
 * index i of the new array is the product of all the numbers in the original
 * array except the one at i.
 *
 * @param {number[]} integers
 * @returns {number[]}
 */
module.exports = integers =>
  integers.map((x, i) =>
    integers.reduce((total, y, j) => (i === j ? total : total * y), 1)
  );
