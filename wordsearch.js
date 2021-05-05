const transpose = require ('./example');

const wordSearch = (letters, word) => { 
if (letters.length === 0) {
    return false;
}
    
const horizontalJoin = letters.map(ls => ls.join(''));

const verticalJoin = transpose(letters).map(ls => ls.join(''));

for (l of horizontalJoin) {
    if (l.includes(word)) return true;
}
for (l of verticalJoin) {
    if (l.includes(word)) return true;
}
    return false;
};

module.exports = wordSearch;