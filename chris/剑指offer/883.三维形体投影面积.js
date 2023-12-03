/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
    // 元素个数 + 列最大 + 行最大
    let [m, n] = [grid.length, grid[0].length];
    let res = 0;
    let tempArr = grid[0]; // 列最大值
    for (let i = 0; i < m; i++) {
        let temp2 = grid[i][0]; // 行最大值
        for (let j = 0; j < n; j++) {
            if(grid[i][j] !== 0) res++;
            if (grid[i][j] > temp2) temp2 = grid[i][j];
            if (grid[i][j] > tempArr[j]) tempArr[j] = grid[i][j];
        }
        res += temp2;
    }
    res = tempArr.reduce((pre, cur) => { return pre + cur }, res);
    return res;
};

// test
let grid = [[1,0],[0,2]];
console.log(projectionArea(grid));