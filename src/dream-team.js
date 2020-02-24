module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || Array.isArray(members) && members.length < 1) return false;

  let letters = '';

  members.map(name => {
    if (typeof name === 'string') {
      return name.split(' ').filter(Boolean)[0];
    }
  }).filter(Boolean).forEach(letter => letters += letter[0].toUpperCase());

  return letters.split('').sort().join('');
};