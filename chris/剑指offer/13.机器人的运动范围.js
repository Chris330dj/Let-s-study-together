/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    const visited = Array(m).fill(0).map(_ => Array(n).fill(false));
    //
    function dfs(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n || !canPass(i, j, k) || visited[i][j]) {
            return 0;
        } else {
            visited[i][j] = true;
            return 1 + dfs(i + 1, j) + dfs(i, j + 1);
        }

    }
    return dfs(0, 0);
};

const canPass = function (i, j, k) {
    let sequence = i.toString() + j.toString();
    let sum = sequence.split('').reduce((total, current) => {
        return total + Number(current)
    }, 0)
    return (sum <= k);
}

// 计算位数和
function sum(n) {
    let res = 0;
    while (n) {
        res += n % 10; //取余
        n = Math.floor(n / 10); // 取十位
    }
}

//
const m = 2, n = 3, k = 1;
console.log("输出: ", movingCount(m, n, k));