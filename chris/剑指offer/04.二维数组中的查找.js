/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// 左下角
var findNumberIn2DArray1 = function (matrix, target) {
    if (!matrix.length) return false;
    let [y_min, y_max] = [0, matrix.length - 1];
    let [x_min, x_max] = [0, matrix[0].length - 1];
    let i = 0, j = y_max;
    while (i <= x_max && j >= y_min) {
        if (matrix[j][i] > target) {
            j--;
        } else if (matrix[j][i] < target) {
            i++;
        } else {
            return true;
        }
    }
    return false;
};

// 右上角
var findNumberIn2DArray2 = function (matrix, target) {
    if (!matrix.length) return false;
    let [y_min, y_max] = [0, matrix.length - 1];
    let [x_min, x_max] = [0, matrix[0].length - 1];
    let i = x_max, j = 0;
    while (i >= x_min && j <= y_max) {
        if (matrix[j][i] > target) {
            i--;
        } else if (matrix[j][i] < target) {
            j++;
        } else {
            return true;
        }
    }
    return false;
};

const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];
const target = 20;

console.log(findNumberIn2DArray2(matrix, target));