/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
    let cur = 0;
    for (let i = 2; i <= n; i++) {
        cur = (cur + m) % i;
    }
    return cur;
};

//
const n = 10, m = 17;
console.log(lastRemaining(n, m));