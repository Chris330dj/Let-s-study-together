/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
    for (let mid = 0; mid < nums.length; mid++) {
        let sum_l = getSum(nums.slice(0, mid));
        let sum_r = getSum(nums.slice(mid + 1));
        if (sum_l === sum_r) return mid;
    }
    return -1;
};

function getSum(arr) {
    if (!arr.length) return 0;
    return arr.reduce((pre, cur) => { return pre + cur }, 0);
}

// 优化：可以只求一边，另一边用总和-middleIndex

//
const nums = [1];
console.log(findMiddleIndex(nums));