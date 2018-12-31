// module.exports = setTimeout; // 😂

/**
 * Calls f after n milliseconds
 *
 * @param f - Callback function
 * @param n - Milliseconds
 */
module.exports = (f, n) => {
  let elapsed = 0;

  const id = setInterval(() => {
    elapsed++;

    if (elapsed === n) {
      clearInterval(id);
      f();
    }
  }, 1);
};
