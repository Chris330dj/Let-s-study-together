var countBits = function (n) {
    let res = [0, 1];
    if (n < 2) return res.slice(0, n+1);
    let base = 2;
    let count = 2;
    for (let i = 2; i <= n; i++) {
        let temp = 1 + res[i - base];
        res.push(temp);
        count--;
        if (count === 0) {
            base = base * 2;
            count = base;
        }
    }
    return res;
};

// 2. 根据相邻奇偶数关系开始遍历
// 奇比前一个偶 + 1
// 偶与右移一位的数字1数量一样


// test
console.log(countBits(1));
