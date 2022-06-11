/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxSum = nums[0];
    let dp = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp = Math.max(dp + nums[i], nums[i]);
        maxSum = Math.max(maxSum, dp);
    }
    return maxSum;
};

//
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));