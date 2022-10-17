const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let result = '';
  let strWithAddition = '' + str;

  let { 
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;


  if(repeatTimes === 0) {
    return result;
  }

  if (additionRepeatTimes !== 0 && addition !== '') {
    strWithAddition += addition;
  }
  if (additionRepeatTimes > 1 && addition !== '') {
    for(let i = 0; i < additionRepeatTimes - 1 ; i++) {
      strWithAddition += additionSeparator + addition;
    }
  }

  if(repeatTimes !== 0) {
    result += strWithAddition;
  }
  if (repeatTimes > 1) {
    for(let i = 0; i < repeatTimes - 1 ; i++) {
      result += separator + strWithAddition;
    }
  }

  return result;
}

module.exports = {
  repeater
};
