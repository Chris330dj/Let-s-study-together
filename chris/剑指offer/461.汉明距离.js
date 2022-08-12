/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance1 = function (x, y) {
    // x^y的进制数
    let sum = x ^ y;
    let count = 0;
    while (sum) {
        if ((sum & 1)) {
            count++;
        }
        sum = sum >> 1;
    }
    return count;
};

var hammingDistance = function (x, y) {
    let count = 0;
    while (x || y) {
        count += (x & 1) ^ (y & 1);
        x >>= 1;
        y >>= 1;
    }
    return count;
};

//
let x = 1, y = 3;
console.log(hammingDistance(x, y))
