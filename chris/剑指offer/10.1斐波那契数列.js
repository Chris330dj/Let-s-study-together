/**
 * @param {number} n
 * @return {number}
 */

// 考虑时间复杂度的方法
// 存储斐波那契结果
const Flist = [0, 1];
var fib1 = function (n) {
    if (n < Flist.length) {
        return Flist[n];
    } else {
        for (let i = Flist.length; i <= n; i++) {
            Flist[i] = (Flist[i - 1] + Flist[i - 2]) % 1000000007;
        }
        return Flist[n];
    }
};

// 考虑空间复杂度的方法
var fib2 = function (n) {
    if (n < 2) {
        return n;
    } else {
        a = 0;
        b = 0;
        c = 1;
        for (let i = 2; i <= n; i++) {
            a = b;
            b = c;
            c = (a + b) % 1000000007;
        }
        return c;
    }
};

// 测试
const n = 81;
console.log('输出: ', fib2(n));