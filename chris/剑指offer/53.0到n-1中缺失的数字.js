/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber1 = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }
    return nums.length;
};

// 二分法版本
var missingNumber = function (nums) {
    let l = 0, r = nums.length;
    let res = nums.length;
    while (l < r) {
        let m = Math.floor((l + r) / 2);
        if (nums[m] !== m) {
            // 发现问题
            r = m;
        } else {
            l = m + 1;
        }
    };
    return l;
};

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 9];
console.log(missingNumber(nums));