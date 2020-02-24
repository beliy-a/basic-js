module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (typeof date !== 'object' && date === null || Array.isArray(date)) throw Error;
  if (date.hasOwnProperty('toString')) throw Error;

  const season = {
    'winter': [11, 0, 1],
    'summer': [5, 6, 7],
    'spring': [2, 3, 4],
    'autumn': [8, 9, 10]
  };

  for (let prop in season) {
    if (season[prop].indexOf(date.getMonth()) !== -1) {
      return prop;
    }
  }

  return false;
}
