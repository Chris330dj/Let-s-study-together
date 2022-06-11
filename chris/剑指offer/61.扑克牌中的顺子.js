/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
    let sorted = nums.sort((a, b) => (a - b));
    let num_zero = 0;

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === 0) {
            num_zero++;
        } else {
            if (i === 0 || sorted[i - 1] === 0) {
                continue;
            }
            if (sorted[i] > sorted[i - 1]) {
                num_zero -= sorted[i] - sorted[i - 1] - 1;
                if (num_zero < 0) return false;
                continue;
            } else {
                return false;
            }
        }
    }
    return true;
};

//
const nums = [8, 7, 11, 0, 9];
console.log("输出: ", isStraight(nums));