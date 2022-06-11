/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search1 = function (nums, target) {
    let index = nums.indexOf(target);
    if (index < 0) return 0;
    return nums.lastIndexOf(target) - index + 1;
};

// 这两个方法执行用时一致，说明js的indexOf也是用的二分？
var search = function (nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (nums[m] < target) {
            l = m + 1;
        } else if (nums[m] > target) {
            r = m - 1;
        } else {
            // nums[m] === target
            if (nums[l] !== target) {
                l++;
            } else if (nums[r] !== target) {
                r--;
            } else {
                break;
            }
        }
    };
    return r - l + 1;
};




const nums = [5, 7, 7, 8, 8, 10];
const target = 8;
console.log(search(nums, target));