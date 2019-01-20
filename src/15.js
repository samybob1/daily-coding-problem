/**
 * Returns a random element with uniform probability
 *
 * @param {*[]} elements
 * @returns {*|null}
 */
module.exports = s = elements => {
  let result = elements.length ? elements[0] : null;

  elements.forEach((element, index) => {
    if (random(1, index + 1) === 1) {
      result = element;
    }
  });

  return result;
};

/**
 * Returns a random number between min (included) and max (included)
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
