/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function (str) {
    let res = 0;
    str = str.trim();
    let reg = /^(\+|\-)?\d+/g;
    regRes = str.match(reg);
    if (!regRes) return res;
    str = regRes[0];
    let [min, max] = [-Math.pow(2, 31), Math.pow(2, 31) - 1];
    res = Number(str); // 这里最好不用库函数
    if (res < min) return min;
    if (res > max) return max;
    return res;
};

//
const str = "words and 987";
console.log(strToInt(str));