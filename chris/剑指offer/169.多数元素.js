/**
 * @param {number[]} nums
 * @return {number}
 */

// 摩尔投票解法
var majorityElement1 = function (nums) {
    let flag;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (count == 0) {
            flag = nums[i];
            count++;
        } else {
            if (nums[i] === flag) {
                count++;
            } else {
                count--;
            }
        }
    }
    return flag;
};

var majorityElement = function (nums) {
    // 治
    function getCount(target, lo, hi) {
        let count = 0;
        for (let i = lo; i <= hi; i++) {
            if (nums[i] === target) count++;
        }
        return count;
    }
    // 分
    function handle(lo, hi) {
        if (lo === hi) return nums[lo];
        let mid = (lo + hi) >> 1;
        let left = handle(lo, mid);
        let right = handle(mid + 1, hi);
        if (left === right) return left;
        let count_l = getCount(left, lo, mid);
        let count_r = getCount(right, mid + 1, hi);
        return count_l > count_r ? left : right;
    }
    return handle(0, nums.length - 1);
};

//
const nums = [3, 3, 4];
console.log(majorityElement(nums));