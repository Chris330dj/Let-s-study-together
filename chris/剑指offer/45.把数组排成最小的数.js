/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
    let sorted = nums.sort((a, b) => (`${a}${b}` - `${b}${a}`));
    return sorted.join('');
};

//
const nums = [3, 30, 34, 5, 9];
console.log("输出: ", minNumber(nums));