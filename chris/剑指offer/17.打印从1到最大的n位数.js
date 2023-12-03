/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
    let maxNum = Math.pow(10, n) - 1;
    let res = new Array(maxNum).fill(0);
    return res.map((_, index) => { return index+1 });
};

console.log(printNumbers(1));