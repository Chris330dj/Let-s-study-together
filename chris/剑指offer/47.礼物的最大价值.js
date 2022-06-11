/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
    let [m, n] = [grid[0].length, grid.length];
    let dpGrid = new Array(n).fill(new Array(m).fill(0));
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < m; i++) {
            dpGrid[j][i] = Math.max((i == 0) ? 0 : dpGrid[j][i - 1], (j == 0) ? 0 : dpGrid[j - 1][i]) + grid[j][i];
        }
    }
    return dpGrid[n - 1][m - 1];
};

//
const grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
];
console.log(maxValue(grid));