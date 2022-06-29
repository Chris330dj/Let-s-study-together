/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length <= 1) return nums;
    let p = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[p]) {
            p = p+1;
            if (p !== i) {
                [nums[i], nums[p]] = [nums[p], nums[i]];
            }
        }
    }
    return p+1;
};


// test
const nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));