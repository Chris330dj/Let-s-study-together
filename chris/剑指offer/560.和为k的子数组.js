const { sum, matchesProperty } = require("lodash");

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum1 = function (nums, k) {
    let count = 0;
    for (let p = 0; p < nums.length; p++) {
        let sum = 0;
        for (let i = p; i < nums.length; i++) {
            sum += nums[i];
            if (sum === k) {
                count++;
            }
        }
    }
    return count;
};

var subarraySum2 = function (nums, k) {
    // 如何减少重复计算
    // 利用前缀和: 从上式可以知道已经计算过0-1, 0-2，...
    // [1-2] = [0-2] - [0-1]
    // 空间换时间
    let prefixSum = new Array(nums.length + 1).fill(0);
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
        if (prefixSum[i + 1] === k) count++;
    }
    for (let l = 1; l < nums.length; l++) {
        for (let r = l; r < nums.length; r++) {
            if ((prefixSum[r + 1] - prefixSum[l]) === k) count++;
        }
    }
    return count;
};

// 因为不需要具体的子数组位置，可利用map减少遍历
var subarraySum = function (nums, k) {
    // 从上一个方法可以得知, k值 = [前缀和1] - [前缀和2]
    // 因此用一个map存储对应前缀和数量就行, 可以把时间复杂度缩减到O(n)
    let map = new Map();
    map.set(0, 1);
    let prefixSum = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        // 计算count
        if (map.get(prefixSum - k)) {
            count += map.get(prefixSum - k);
        }
        // 注入
        if (!map.get(prefixSum)) {
            map.set(prefixSum, 1);
        } else {
            map.set(prefixSum, map.get(prefixSum) + 1);
        }
    }
    return count;
};

// test
// 这题居然有复数
const nums = [1, 2, 3], k = 3;
console.log(subarraySum(nums, k));
