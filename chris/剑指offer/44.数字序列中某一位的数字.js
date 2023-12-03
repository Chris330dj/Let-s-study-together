/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    let digit = 1; // 位数
    let start = 1; // 当前digit下的起始数字
    let count = 9; // 当前digit下的位数
    while(n > count){
        n -= count;
        digit += 1;
        start *= 10;
        count = digit * start * 9;
    }
    let num = start + Math.floor((n-1)/digit); // 哪一位
    return num.toString().charAt((n-1) % digit) - 0;
};

console.log(findNthDigit(11));