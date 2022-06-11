/**
 * @param {number[]} a
 * @return {number[]}
 */
//背离题目的解法
var constructArr1 = function (a) {
    const product = a.reduce((pre, cur) => pre * cur, 1);
    return a.map((val) => product / val);
};

//
var constructArr = function (a) {
    let len = a.length;
    if (!len) return [];
    let res = new Array(len).fill(1);
    let product = 1;
    for (let i = 0; i < len; i++) {
        res[i] = product;
        product *= a[i];
    }
    product = 1;
    for (let i = len - 1; i >= 0; i--) {
        res[i] = res[i] * product;
        product *= a[i];
    }
    return res;
};

//
const a = [1, 2, 3, 4, 5];
console.log(constructArr(a));