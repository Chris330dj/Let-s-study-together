/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    if (!nums.length) return nums;
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        while (isOdd(nums[l]) && (l < r)) l++; // 奇
        while (!isOdd(nums[r]) && (l < r)) r--; // 偶
        if (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
            r--;
        }
    }
    return nums;
};

const isOdd = function (num) {
    return !!(num % 2)
}

//
const nums = [2, 4, 6];
console.log("输出: ", exchange(nums));