/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring1 = function (s) {
    let arr = s.split('');
    if (!arr.length) return 0;
    let maxLen = 1;
    let dp = 1;
    let left = 0;
    for (let i = 1; i < arr.length; i++) {
        pos = arr.slice(left, i).lastIndexOf(arr[i]) + left;
        if (pos > -1) {
            // 出现重复
            left = pos + 1;
            dp = i - pos;
        } else {
            dp = dp + 1;
        }
        maxLen = Math.max(maxLen, dp);
    }
    return maxLen;
};

var lengthOfLongestSubstring2 = function (s) {
    let res = 0;
    const set = new Set();
    for (let l = 0, r = 0; r < s.length; r++) {
        while (set.has(s[r])) {
            set.delete(s[l]);
            l++;
        }
        set.add(s[r]);
        res = Math.max(res, set.size);
    }
    return res;
};

//
const s = "bbbbb";
console.log("输出: ", lengthOfLongestSubstring2(s));