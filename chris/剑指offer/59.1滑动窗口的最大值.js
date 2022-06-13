/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let len = nums.length;
    if (len < 2) return nums;
    let res = [];
    // 维护一个单调减的最大值队列
    let queue = [];
    for (let i = 0; i < len; i++) {
        while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
            queue.pop();
        }
        queue.push(i);
        if (queue[0] < (i - k + 1)) queue.shift();
        if (i >= (k - 1)) {
            res.push(nums[queue[0]]);
        }
    }
    return res;
};

//
const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
console.log(maxSlidingWindow(nums, k));