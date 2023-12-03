/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n < 4) return n;
    let dp = [];
    dp.push(...[0, 1, 2, 3]);
    for (let i = 4; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};

console.log(climbStairs(2));