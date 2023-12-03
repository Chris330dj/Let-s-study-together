/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes1 = function (nums) {
    let p0 = 0;
    while (nums[p0] !== 0 && p0 < nums.length) {
        p0++;
    }
    for (let i = p0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (p0 >= 0) {
                [nums[i], nums[p0]] = [nums[p0], nums[i]];
                p0++;
            }
        }
    }
    return nums;
};

// 双指针
var moveZeroes = function (nums) {
    let l = 0, r = 0, len = nums.length;
    while (r < len) {
        if (nums[r]) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
        }
        r++;
    }
    return nums;
};


// test
const nums = [1];
console.log(moveZeroes(nums));
