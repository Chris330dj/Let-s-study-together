/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        let sum = nums[l] + nums[r];
        if (sum === target) {
            return [nums[l], nums[r]];
        } else if (sum > target) {
            // 偏大
            r--;
        } else {
            // 偏小
            l++;
        }
    }
    return [];
};

//
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));