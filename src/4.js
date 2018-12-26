/**
 * Given an array of integers, find the first missing positive integer in linear
 * time and constant space. In other words, find the lowest positive integer
 * that does not exist in the array. The array can contain duplicates and
 * negative numbers as well.
 *
 * @param {number[]} integers
 * @returns {number|null}
 */
module.exports = integers => {
  const positives = integers.filter(x => x > 0);
  const unique = new Set(positives);
  const sorted = [...unique].sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    const number = sorted[i];
    const previous = number - 1;
    const next = number + 1;

    if (previous > 0 && !unique.has(previous)) {
      return previous;
    }

    if (next > 0 && !unique.has(next)) {
      return next;
    }
  }

  return null;
};
