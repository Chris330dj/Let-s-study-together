/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    // 根据题干描述造一个长为32的数组存放每个二进制位的计数结果
    let arr = new Array(32).fill(0);
    let p = 0; // 记录当前二进制位数
    let res = 0; //记录结果
    // 开始统计
    for (let i = 0; i < nums.length; i++) {
        p = 0;
        while (nums[i]) {
            arr[p] += nums[i] & 1;
            nums[i] = nums[i] >> 1;
            p++;
        }
    }
    //
    for (let i = 0; i < arr.length; i++) {
        res += Math.pow(2, i) * (arr[i] % 3);
    }
    return res;
};

//
const nums = [3, 4, 3, 3];
console.log(singleNumber(nums));