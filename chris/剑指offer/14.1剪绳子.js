/**
 * @param {number} n
 * @return {number}
 */

// 数学方法
var cuttingRope1 = function (n) {
    // 优先分出3 2构成解
    if (n === 2) return 1;
    if (n === 3) return 2;
    let divisor = Math.floor(n / 3);
    let remainder = n % 3;
    let res = 1;
    if (remainder === 2) {
        res = 2 * Math.pow(3, divisor);
    } else if (remainder === 1) {
        // 余数为1，分出一个3变成2 2
        res = 2 * 2 * Math.pow(3, divisor - 1);
    } else {
        // 全为3
        res = Math.pow(3, divisor);
    }
    return res;
};

// 动态规划法
var cuttingRope = function (n) {
    let dp = new Array(n + 1).fill(1);
    for (let i = 3; i < n + 1; i++) {
        for (let j = 2; j < i; j++) {
            // 因为不同的j会得到不一样的dp[i], 所以也要比较dp[i]
            // 在j位置剪了一刀后, (i-j)处还要不要再剪
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
        }
    }
    return dp[n];
};

//
console.log(cuttingRope(10));