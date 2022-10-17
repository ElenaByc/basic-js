const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let len = str.length;
  if (len <= 1) {
    return str;
  }
  let ch = str[0];
  let counter = 1;
  for (let i = 1; i < len; i++) {
    if (str[i] === ch) {
      counter++;
    } else {
      result += counter !== 1 ? counter + ch : ch;
      ch = str[i];
      counter = 1;
    }
  }
  result += counter !== 1 ? counter + ch : ch;
  return result;
}

module.exports = {
  encodeLine
};
