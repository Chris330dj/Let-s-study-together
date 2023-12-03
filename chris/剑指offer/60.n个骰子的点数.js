/**
 * @param {number} n
 * @return {number[]}
 */
var dicesProbability = function (n) {
    let dp = new Array(n + 1).fill().map(() => new Array(n * 6 + 1).fill(0));
    let result = [];
    // n = 1 时的概率
    for (let i = 1; i <= 6; i++) {
        dp[1][i] = 1;
    }
    // n > 1 时的概率
    for (let i = 2; i <= n; i++) {
        // i为骰子数
        for (let j = i; j <= 6 * i; j++) {
            // j为和
            for (let k = 1; k <= 6; k++) {
                // 当前骰子为k
                if (j <= k) break;
                dp[i][j] += dp[i - 1][j - k];
            }
        }
    }
    // 所有可能的总数
    let total = Math.pow(6, n);
    for (let i = n; i <= n * 6; i++) {
        result.push(dp[n][i] / total)
    }
    return result;
};

console.log(dicesProbability(2));