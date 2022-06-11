/**
 * @param {number} n
 * @return {number}
 */
var sumNums1 = function (n) {
    return n && n + sumNums(n-1);
};

var sumNums = function (n) {
    return Math.round(Math.exp(Math.log(n)+Math.log(n+1)-Math.log(2)));
};

//
console.log(sumNums(3));