/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// 迭代
var myPow1 = function (x, n) {
    if (!x) return x;
    if (n === 0) return 1;
    if (n === 1) return x;
    if (n === -1) return 1 / x;
    let res = myPow1(x, n >> 1);
    res *= res;
    if (n & 1 === 1) res *= x;
    return res;
};

// 位运算
var myPow = function (x, n) {
    if (!x) return x;
    if (x === 1) return 1;
    if (n === 0) return 1;
    if (n === 1) return x;
    if (n < 0) return 1 / myPow(x, -n);

    let m = x;
    let b = n;
    let res = 1;
    while (b) {
        if (b & 1) res *= m;
        b = b >>> 1;
        m *= m;
    }
    return res;
};

const x = 2.00000, n = 10;
console.log(myPow(x, n));