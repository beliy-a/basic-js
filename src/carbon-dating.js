const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let strToNum = parseFloat(sampleActivity);

  if (isNaN(strToNum) || typeof sampleActivity != 'string' || sampleActivity < 1 || sampleActivity > 15) return false;

  return Math.ceil(Math.log(MODERN_ACTIVITY / strToNum) / (0.693 / HALF_LIFE_PERIOD));
}