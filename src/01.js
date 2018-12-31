/**
 * Given a list of numbers and a number k, return whether any two numbers from
 * the list add up to k.
 *
 * @param {number[]} numbers
 * @param {number} k
 * @returns {boolean}
 */
module.exports = (numbers, k) => {
  let left = 0;
  let right = numbers.length - 1;
  numbers.sort((a, b) => a - b);

  while (left < right) {
    const result = numbers[left] + numbers[right];

    if (result === k) {
      return true;
    }

    if (result < k) {
      left++;
    } else {
      right--;
    }
  }

  return false;
};
