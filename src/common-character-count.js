const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const freq = Object.create(null);
  let res = 0;

  for (let i = 0; i < s1.length; i += 1) {
    const char = s1[i];
    freq[char] = (freq[char] || 0) + 1; 
  }

  for (let j = 0; j < s2.length; j += 1) {
    const char = s2[j];

    if (freq[char] > 0) {
      res += 1;
      freq[char] -= 1;
    }

  }
  
  return res;
}

module.exports = {
  getCommonCharacterCount
};
