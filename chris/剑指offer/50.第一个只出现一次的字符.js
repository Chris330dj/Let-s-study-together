/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar1 = function (s) {
    if (!s.length) return ' ';
    let arr = s.split('');
    let res = ' ';
    let map = new Map();
    for (let item of arr) {
        if (map.has(item)) {
            map.set(item, map.get() + 1);
        } else {
            map.set(item, 1);
        }
    }
    for (let item of arr) {
        if (map.get(item) === 1) {
            return item;
        }
    }
    return res;
};
var firstUniqChar2 = function (s) {
    if (!s.length) return ' ';
    const hashMap = new Array(26).fill(0);
    const arr = s.split('');
    for (let item of arr) {
        let i = item.charCodeAt() - 97;
        hashMap[i]++;
    };
    for (let item of arr) {
        let i = item.charCodeAt() - 97;
        if(hashMap[i] === 1) return item;
    };
    return ' ';
};

const s = "abaccdeff";
console.log(firstUniqChar2(s));