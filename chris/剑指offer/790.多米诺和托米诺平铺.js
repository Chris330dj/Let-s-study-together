/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
    let dp = [1, 0, 0, 0];
    const MOD = Math.pow(10, 9) + 7;
    for (let i = 0; i < n; i++) {
        let curN = [0, 0, 0, 0];
        curN[0] = (dp[0] + dp[3]) % MOD;
        curN[1] = (dp[0] + dp[2]) % MOD;
        curN[2] = (dp[0] + dp[1]) % MOD;
        curN[3] = (dp[0] + dp[1] + dp[2]) % MOD;
        dp = curN;
    }
    return dp[0];
};

// test
console.log(numTilings(4));

// 动态规划题
