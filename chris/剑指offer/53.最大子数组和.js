/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray1 = function (nums) {
    let sum = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        sum = Math.max(sum + nums[i], nums[i]);
        if (sum > max) max = sum;
    }
    return max;
};

// 分治法
var maxSubArray = function (nums) {
    return _maxSubArray(nums, 0, nums.length - 1);
};

function _maxSubArray(nums, left, right) {
    if (left === right) return nums[left];
    let mid = Math.floor((left + right) / 2);
    let left_sum = _maxSubArray(nums, left, mid);
    let right_sum = _maxSubArray(nums, mid + 1, right);
    let mid_sum = getMidSum(nums, left, right, mid);
    return Math.max(left_sum, right_sum, mid_sum);
}
function getMidSum(nums, left, right, mid) {
    if (left === right) return nums[left];
    // 必包含mid和mid+1
    let left_sum = nums[mid];
    let left_maxsum = nums[mid];
    for (let i = mid - 1; i >= left; i--) {
        left_sum += nums[i];
        left_maxsum = Math.max(left_maxsum, left_sum);
    }
    let right_sum = nums[mid + 1];
    let right_maxsum = nums[mid + 1];
    for (let i = mid + 2; i <= right; i++) {
        right_sum += nums[i];
        right_maxsum = Math.max(right_maxsum, right_sum);
    }
    return left_maxsum + right_maxsum;
}

// 
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));