/**
 * @param {string} s
 * @return {string}
 */
var reverseWords1 = function (s) {
    // 通过观察目标和结果之间的关系，整体翻转再内部翻转可得到。
    s = reverse1(s.trim());
    arr = s.split(/\s+/);
    let res = arr.map(item => {
        return reverse1(item.trim());
    })
    return res.join(' ');
};

const reverse1 = function (s) {
    let arr = s.split('');
    let res = [];
    while (arr.length) {
        res.unshift(arr.shift());
    }
    return res.join('');
}


var reverseWords2 = function (s) {
    return reverse2(s.trim().split(/\s+/)).join(' ');
};

const reverse2 = function (s) {
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        [s[l], s[r]] = [s[r], s[l]];
        l++;
        r--;
    }
    return s;
}

var reverseWords2 = function (s) {
    //
}

//
const s = "the sky is blue";
console.log("输出: ", reverseWords2(s));
