/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder1 = function (matrix) {
    let [m, n] = [matrix.length, matrix[0] && matrix[0].length];
    let res = [];
    if (!m || !n) return res;
    let direct = 1; // [1, 2, 3, 4]顺序为[左到右, 上到下, 右到左, 下到上]
    while (m && n) {
        switch (direct) {
            case 1:
                res.push(...matrix.shift());
                direct = 2;
                break;
            case 2:
                for (let i = 0; i < m; i++) {
                    res.push(matrix[i].pop());
                }
                direct = 3;
                break;
            case 3:
                res.push(...(matrix.pop().reverse()));
                direct = 4;
                break;
            case 4:
                for (let i = m - 1; i >= 0; i--) {
                    res.push(matrix[i].shift());
                }
                direct = 1;
                break;
        }
        [m, n] = [matrix.length, matrix[0] && matrix[0].length];
    }
    return res;
};

// 用生成器优化一下direct赋值
var spiralOrder2 = function (matrix) {
    let [m, n] = [matrix.length, matrix[0] && matrix[0].length];
    let res = [];
    if (!m || !n) return res;
    // 用生成器获取direct的值
    const directIterator = (function* generator() {
        yield 1; // 方向为 左到右
        yield 2; // 方向为 上到下
        yield 3; // 方向为 右到左
        yield 4; // 方向为 下到上
        yield* generator();
    })();
    // 优化m,n的取值
    while (m && n) {
        let direct = directIterator.next().value;
        switch (direct) {
            case 1:
                res.push(...matrix.shift());
                m--;
                break;
            case 2:
                for (let i = 0; i < m; i++) {
                    res.push(matrix[i].pop());
                }
                n--;
                break;
            case 3:
                res.push(...(matrix.pop().reverse()));
                m--;
                break;
            case 4:
                for (let i = m - 1; i >= 0; i--) {
                    res.push(matrix[i].shift());
                }
                n--;
                break;
        }
    }
    return res;
};

// 把switch换成while+4个for, 就不需要direct判断方向了
var spiralOrder = function (matrix) {
    let [m, n] = [matrix.length, matrix[0] && matrix[0].length];
    let res = [];
    if (!m || !n) return res;
    while (m && n) {
        res.push(...matrix.shift());
        m--;
        if (!m) break;
        for (let i = 0; i < m; i++) {
            res.push(matrix[i].pop());
        }
        n--;
        if (!n) break;
        res.push(...(matrix.pop().reverse()));
        m--;
        if (!m) break;
        for (let i = m - 1; i >= 0; i--) {
            res.push(matrix[i].shift());
        }
        n--;
    }
    return res;
};

//
const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
console.log(spiralOrder(matrix));