/**
 * Returns the number of unique ways you can climb the staircase
 *
 * @param {number} n - Number of steps of the staircase
 * @param {number[]} [x=[1, 2]] - Number of steps you can climb at a time
 * @returns {number}
 */
module.exports = (n, x = [1, 2]) => {
  let toProcess = [...x];
  let solutions = 0;

  while (toProcess.length) {
    const [newSolutions, newToProcess] = process(toProcess.shift(), n, x);
    toProcess = toProcess.concat(newToProcess);
    solutions += newSolutions;
  }

  return solutions;
};

/**
 * Returns total of solutions and remaining values to process
 *
 * @param {number} steps - Number of steps climbed so far
 * @param n - Number of steps of the staircase
 * @param x - Number of steps you can climb at a time
 * @returns {[number, number[]]}
 */
const process = (steps, n, x) => {
  const toProcess = [];
  let solutions = 0;

  if (steps === x) {
    solutions++;
  } else {
    x.forEach(step => {
      const next = steps + step;

      if (next < n) {
        toProcess.push(next);
      } else if (next === n) {
        solutions++;
      }
    });
  }

  return [solutions, toProcess];
};
