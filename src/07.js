/**
 * Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, returns
 * the number of ways it can be decoded
 *
 * @param encoded
 * @returns {number}
 */
module.exports = encoded => {
  let toProcess = [encoded];
  let solutions = 0;

  while (toProcess.length) {
    const [newSolutions, newToProcess] = process(toProcess.shift());
    toProcess = toProcess.concat(newToProcess);
    solutions += newSolutions;
  }

  return solutions;
};

/**
 * Returns total of solutions and remaining strings to process
 *
 * @param {string} encoded
 * @returns {[number, string[]]}
 */
const process = encoded => {
  const toProcess = [];
  let solutions = 0;

  for (let i = 1; i < 27; i++) {
    const subString = i.toString();

    if (encoded.startsWith(subString)) {
      const remaining = encoded.substring(subString.length);

      if (remaining.length) {
        toProcess.push(remaining);
      } else {
        solutions++;
      }
    }
  }

  return [solutions, toProcess];
};
