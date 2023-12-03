/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length < 2) return 0;
    let maxDiff = 0;
    let priceIn = prices[0];
    for (let i = 1; i < prices.length; i++) {
        let curDiff = prices[i] - priceIn;
        maxDiff = Math.max(maxDiff, curDiff);
        priceIn = Math.min(priceIn, prices[i]);
    }
    return maxDiff;
};

//
const prices = [7,6,4,3,1];
console.log(maxProfit(prices));