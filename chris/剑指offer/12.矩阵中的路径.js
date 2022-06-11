/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    if (word === '') return false;
    let m = board.length;
    let n = board[0].length;

    function dfs(i, j, k) {
        // k为在word上的位置
        // 越界处理
        if (i < 0 || i >= m || j < 0 || j >= n) return false;
        if (board[i][j] !== word[k]) return false;
        if (k === (word.length - 1)) return true;
        board[i][j] = ''; // 该位置已遍历
        let next = dfs(i - 1, j, k + 1) || dfs(i + 1, j, k + 1)
            || dfs(i, j - 1, k + 1) || dfs(i, j + 1, k + 1);
        board[i][j] = word[k]; // 恢复

        return next;
    }

    for (let i = 0; i < board.length; i++) {
        // 列
        for (let j = 0; j < board[0].length; j++) {
            //行
            if(dfs(i, j, 0)) return true;
        }
    }
    return false;
};



//
const board = [["a","b"]];
const word = "ba";
console.log("输出: ", exist(board, word));
