/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let sum = 0;
    if (n === 0) return 0;
    while (n) {
        let b = n & 1;
        if (b) sum++;
        n = n >>> 1;
    }
    return sum;
};

//
console.log(hammingWeight(4294967293));