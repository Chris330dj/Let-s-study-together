/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
    let arr = num.toString().split('');
    if (arr.length < 2) return arr.length;
    let dp = [1, 1];
    for (let i = 2; i <= arr.length; i++) {
        const temp = Number(arr.slice(i - 2, i).join(''));
        const canCombine = (temp > 9) && (temp < 26);
        dp[i] = dp[i - 1] + (canCombine ? dp[i - 2] : 0);
    }
    return dp[arr.length];
};

//
const num = 506;
console.log('输出: ', translateNum(num));