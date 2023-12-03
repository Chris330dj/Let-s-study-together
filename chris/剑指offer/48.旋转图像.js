/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let n = matrix.length;
    if (n < 2) return matrix;
    // (i, j) - (j, i) 转置
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    // (i, j) - (n-i, n-j)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < (n >> 1); j++) {
            [matrix[i][j], matrix[i][n - 1 - j]] = [matrix[i][n - 1 - j], matrix[i][j]];
        }
    }
    return matrix;
};



// test
// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
console.log('final: ', rotate(matrix));
