/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
    while (b) {
        let c = (a & b) << 1; // 进位
        a ^= b; // 非进位和
        b = c;
    }
    return a;
};

console.log(add(1, 1));