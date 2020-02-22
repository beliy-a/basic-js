module.exports = function countCats(backyard) {
  let count = 0;

  backyard.forEach(element => {
    element.forEach(yard => yard === '^^' && count++);
  });

  return count;
};
