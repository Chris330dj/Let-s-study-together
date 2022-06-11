/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
    if (n === 0) return 1;
    if (n < 3) return n;
    const MOD = 1000000007;
    a = 1; //f(0)
    b = 1; //f(1)
    c = 2; //f(2)
    for (let i = 3; i < n + 1; i++) {
        a = b;
        b = c;
        c = (a + b) % MOD;
    }
    return c;
};

//
const n = 78;
console.log('输出: ', numWays(n));