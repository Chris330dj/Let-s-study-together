/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let curMin = prices[0];
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < curMin) curMin = prices[i];
        let curProfit = prices[i] - curMin;
        if (curProfit > maxProfit) maxProfit = curProfit;
    }
    return maxProfit;
};

//
const list = [7,6,4,3,1];
console.log("输出: ", maxProfit(list));