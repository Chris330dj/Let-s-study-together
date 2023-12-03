/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 新建一个访问数组
var findDisappearedNumbers1 = function (nums) {
    let len = nums.length;
    let arr = new Array(len + 1).fill(1);
    arr[0] = 0;
    for (let item of nums) {
        arr[item] = 0;
    }
    let res = [];
    arr.forEach((val, i) => {
        if (val) res.push(i);
    })
    return res;
};

// 用负数表示该位置已被遍历
var findDisappearedNumbers = function (nums) {
    let res = [];
    nums.forEach((val) => {
        let pos = Math.abs(val) - 1;
        if (nums[pos] > 0) {
            nums[pos] = -nums[pos];
        }
    })
    nums.forEach((val, i) => {
        if (val > 0) {
            res.push(i + 1);
        }
    })
    return res;
};

//
const nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums));
