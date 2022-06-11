/**
 * @param {number[]} nums
 * @return {number}
 */

// normal approach
var majorityElement1 = function (nums) {
    nums = nums.sort((a, b) => a - b);
    return nums[Math.ceil(nums.length / 2) - 1];
};

// 摩尔投票法
var majorityElement = function (nums) {
    if (nums.length < 2) return nums[0];
    let mode = nums[0];
    let res = 1;
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] === mode){
            res++;
        }else{
            res--;
        }
        if(res === 0){
            mode = nums[i+1];
        }
    }
    return mode;
};

//
const nums = [1, 2, 3, 2, 2, 2, 5, 4, 2];
console.log(majorityElement(nums));