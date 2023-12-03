/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function (nums) {
    if (nums.length < 3) return 0;
    let oddSum = 0; // 奇数大
    let evenSum = 0; // 偶数大
    const copy1 = [...nums], copy2 = [...nums];
    for (let i = 1; i < nums.length; i += 2) {
        if (copy1[i - 1] >= copy1[i]) {
            oddSum += (copy1[i - 1] - copy1[i] + 1);
            copy1[i - 1] -= (copy1[i - 1] - copy1[i] + 1);
        };
        if (copy1[i + 1] >= copy1[i]) {
            oddSum += (copy1[i + 1] - copy1[i] + 1);
            copy1[i + 1] -= (copy1[i + 1] - copy1[i] + 1);
        };
    }
    for (let i = 0; i < nums.length; i += 2) {
        if (copy2[i - 1] >= copy2[i]) {
            evenSum += (copy2[i - 1] - copy2[i] + 1);
            copy2[i - 1] -= (copy2[i - 1] - copy2[i] + 1);
        };
        if (copy2[i + 1] >= copy2[i]) {
            evenSum += (copy2[i + 1] - copy2[i] + 1);
            copy2[i + 1] -= (copy2[i + 1] - copy2[i] + 1);
        };
    }
    return Math.min(oddSum, evenSum);
};

// test
const nums = [1, 2, 3];
console.log(movesToMakeZigzag(nums));