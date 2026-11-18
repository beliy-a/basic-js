const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numToStr = String(n);
  let maxNum = 0;
  
  for (let i = 0; i < numToStr.length; i += 1) {
    const curr = Number(numToStr.slice(0, i) + numToStr.slice(i + 1));
    if (curr > maxNum) {
      maxNum = curr;
    }
  }

  return maxNum;
}

module.exports = {
  deleteDigit
};
