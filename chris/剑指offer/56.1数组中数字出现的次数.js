/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers1 = function (nums) {
    let xor = nums.reduce((pre, val) => pre ^ val, 0)
    // 区分用的进制位
    let m = 1;
    while ((m & xor) == 0) {
        m = m << 1;
    }
    let x = 0, y = 0;
    for (let num of nums) {
        if (num & m) {
            x = x ^ num;
        } else {
            y = y ^ num;
        }
    }
    return [x, y];
};

var singleNumbers = function (nums) {
    let xor = nums.reduce((pre, val) => pre ^ val, 0)
    // 区分用的进制位
    let m = xor & (~xor +1);
    let x = 0, y = 0;
    for (let num of nums) {
        if (num & m) {
            x = x ^ num;
        } else {
            y = y ^ num;
        }
    }
    return [x, y];
};

//
const nums = [1, 2, 5, 2];
console.log(singleNumbers(nums));
