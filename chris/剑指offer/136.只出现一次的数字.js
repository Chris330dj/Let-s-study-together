/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    if (!nums.length) return;
    let flag = 0;
    for (let i = 0; i < nums.length; i++) {
        flag ^= nums[i];
    }
    return flag;
};

//
const nums = [1, 0, 1];
console.log(singleNumber(nums));