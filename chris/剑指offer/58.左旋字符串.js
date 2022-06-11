/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
    let arr = s.split('');
    for (let i = n; i > 0; i--) {
        let temp = arr.shift();
        arr.push(temp);
    }
    return arr.join('');
};

let s = "abcdefg", k = 2;
console.log(reverseLeftWords(s, k));