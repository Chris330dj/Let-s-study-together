/**
 * @param {string} s
 * @return {string[]}
 */
var permutation1 = function (s) {
    let arr = s.trim().split('');
    let len = arr.length;
    if (!len) return [];
    let res = []; // 存放最终结果
    let item = []; // 存放中间结果
    let visited = new Array(len).fill(0);
    function dfs(nth) {
        if (nth === len) {
            res.push(item.join(''));
        }
        let map = new Map(); // nth层已放置集合
        for (let i = 0; i < len; i++) {
            if (!visited[i] && !map.has(arr[i])) {
                item.push(arr[i]);
                map.set(arr[i], true);
                visited[i] = 1;
                dfs(nth + 1);
                item.pop();
                visited[i] = 0;
            }
        }
    }
    dfs(0);
    return res;
};

var permutation2 = function (s) {
    let arr = Array.from(s).sort();
    let len = arr.length;
    if (!len) return [];
    let res = []; // 存放最终结果
    let item = []; // 存放中间结果
    let visited = new Array(len).fill(0);
    function dfs(nth) {
        if (nth === len) {
            res.push(item.join(''));
        }
        for (let i = 0; i < len; i++) {
            if (visited[i] || (i > 0 && !visited[i-1] && arr[i] == arr[i - 1])) {
                continue;
            }
            item.push(arr[i]);
            visited[i] = 1;
            dfs(nth + 1);
            item.pop();
            visited[i] = 0;
        }
    }
    dfs(0);
    return res;
};

//
const c = "aaaaa";
console.log(permutation2(c));