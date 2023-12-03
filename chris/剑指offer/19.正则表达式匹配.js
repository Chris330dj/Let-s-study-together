/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    if(!s.length && !p.length) return true;
    if(!s.length || !p.length) return false;
};

const s = "aa";
const p = "a*";
console.log(isMatch(s, p));