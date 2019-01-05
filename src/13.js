/**
 * Returns the length of the longest substring that contains at most k distinct
 * characters.
 *
 * @param {string} s - Input string
 * @param {number} k - Maximum number of distinct characters
 * @returns {number}
 */
module.exports = (s, k) => {
  let best = -1;

  for (let length = s.length; length > 0; length--) {
    for (let offset = 0; offset < length; offset++) {
      const sub = s.substr(offset, length);
      const chars = new Set([...sub]);

      if (chars.size <= k && sub.length > best) {
        best = sub.length;
      }
    }
  }

  return best;
};
