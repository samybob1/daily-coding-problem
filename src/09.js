/**
 * Returns the largest sum of non-adjacent numbers
 * @param {number[]} integers
 * @returns {number}
 */
module.exports = integers => {
  let best = 0;

  for (let offset = 0; offset < integers.length; offset++) {
    for (let spacing = 1; spacing < integers.length - 1; spacing++) {
      let result = 0;

      for (let i = offset; i < integers.length; i += 1 + spacing) {
        result += integers[i];
      }

      if (result > best) {
        best = result;
      }
    }
  }

  return best;
};
