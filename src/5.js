/**
 * Constructs a pair
 * @param {*} a - First element
 * @param {*} b - Last element
 * @returns {function(*): *}
 */
const cons = (a, b) => f => f(a, b);

/**
 * Returns the first element of the pair
 * @param pair
 * @returns {*}
 */
const car = pair => pair(a => a);

/**
 * Returns the last element of the pair
 * @param pair
 * @returns {*}
 */
const cdr = pair => pair((a, b) => b);

module.exports = { cons, car, cdr };
