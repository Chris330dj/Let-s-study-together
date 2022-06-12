/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    s = s.trim(); // 去空格
    let reg = /^(\+|\-)?((\d+\.?\d*)|(\.\d+))((e|E)((\+|\-)?\d+))?$/;
    return reg.test(s);
};

//
const s = "0";
console.log(isNumber(s));
