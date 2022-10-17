const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const K = 0.693 / HALF_LIFE_PERIOD;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sample) {
  if (sample === undefined) {
    return false;
  }
  if (typeof sample !== 'string') {
    return false;
  }
  if (isNaN(sample)) {
    return false;
  }
  if (Number(sample) > MODERN_ACTIVITY || Number(sample) <= 0) {
    return false;
  }

  let result = Math.ceil(Math.log(MODERN_ACTIVITY / Number(sample)) / K);
  return result;
}

module.exports = {
  dateSample
};
