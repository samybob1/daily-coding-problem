/**
 * Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, returns
 * the number of ways it can be decoded
 *
 * @param encoded
 * @returns {number}
 */
module.exports = encoded => {
  let toProcess = [new Solution(encoded)];
  let solutions = 0;

  while (toProcess.length) {
    const [newSolutions, newToProcess] = toProcess.shift().process();
    toProcess = toProcess.concat(newToProcess);
    solutions += newSolutions;
  }

  return solutions;
};

class Solution {
  constructor(encoded, decoded = "") {
    this.encoded = encoded;
    this.decoded = decoded;
  }

  process() {
    const toProcess = [];
    let solutions = 0;

    for (let i = 1; i < 27; i++) {
      const subString = i.toString();

      if (this.encoded.startsWith(subString)) {
        const encoded = this.encoded.substring(subString.length);
        const decoded = this.decoded + String.fromCharCode(i + 96);

        if (encoded.length) {
          toProcess.push(new Solution(encoded, decoded));
        } else {
          solutions++;
        }
      }
    }

    return [solutions, toProcess];
  }
}
