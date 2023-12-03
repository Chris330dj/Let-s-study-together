// 参考自[前端面试指南-全排列问题](https://interview2.poetries.top/algorithm-interview/note/14-%E5%9C%BA%E6%99%AF%E5%8C%96%E8%A7%A3%E8%AF%BB%20%E9%80%92%E5%BD%92%E4%B8%8E%E5%9B%9E%E6%BA%AF%E6%80%9D%E6%83%B3%E5%9C%A8%E7%9C%9F%E9%A2%98%E4%B8%AD%E7%9A%84%E5%BA%94%E7%94%A8.html#%E5%85%B3%E9%94%AE%E5%A5%97%E8%B7%AF%E5%88%9D%E7%9B%B8%E8%A7%81-%E5%85%A8%E6%8E%92%E5%88%97%E9%97%AE%E9%A2%98)

/**
 * @description: 无重复序列的全排列组合 Ann
 * @param {number[]}
 * @return {number[][]}
 */
function permutation1(nums) {
    let len = nums.length;
    let res = []; // 最终结果
    if (!len) return res;
    // let nth = 0; // 当前待排列位置
    let item = []; // 某一个排列结果
    let novisited = new Array(len).fill(1); // 某一个排列结果的visited, 0表示visited

    function dfs(nth) { //nth可以用item.length代替
        if (nth === len) {
            // 数组所有位置均排列完成
            res.push([...item]); //一个浅拷贝, 或者写成item.slice()
            return;
        }
        for (let i = 0; i < len; i++) {
            if (novisited[i]) {
                item.push(nums[i]);
                novisited[i] = 0;
                dfs(nth + 1);
                novisited[i] = 1;
                item.pop();
            }
        }
    }
    dfs(0);
    return res;
}

/**
 * @description: 无重复序列的子集(上题基础上的解法) Cn1+Cn2+...+Cnn
 * @param {number[]}
 * @return {number[][]}
 */
function permutation21(nums) {
    let len = nums.length;
    let res = []; // 最终结果
    if (!len) return res;
    // let nth = 0; // 当前待排列位置
    let item = []; // 某一个排列结果
    // let novisited = new Array(len).fill(1); // 某一个排列结果的visited, 0表示visited

    function dfs(nth, sublen, start) {
        if (nth === sublen) {
            // 数组所有位置均排列完成
            res.push([...item]); //一个浅拷贝
            return;
        }
        for (let i = start; i < len; i++) {
            // if (novisited[i]) {
            item.push(nums[i]);
            // novisited[i] = 0;
            dfs(nth + 1, sublen, i + 1);
            // novisited[i] = 1;
            item.pop();
            // }
        }
    }

    for (let sublen = 1; sublen <= len; sublen++) {
        // 第几层, sublen为子集长度, 从哪个元素开始往后找(保证子集顺序)
        dfs(0, sublen, 0);
    }
    return res;
}

/**
 * @description: 无重复序列的子集(推荐) Cn1+Cn2+...+Cnn
 * @param {number[]}
 * @return {number[][]}
 */
function permutation22(nums) {
    let len = nums.length;
    let res = []; // 最终结果
    if (!len) return res;
    let item = []; // 某一层的结果

    function dfs(index) {
        item.length && res.push(item.slice());
        for (let i = index; i < len; i++) {
            item.push(nums[i]);
            dfs(i + 1);
            item.pop();
        }
    }
    dfs(0);
    return res;
}

/**
 * @description: n数取k个元素可能组合(全排列衍生解法) Cnk
 * @param {number[]}
 * @return {number[][]}
 */
function permutation31(n, k) {
    if (!n) return res;
    let res = []; // 最终结果
    let item = []; // 某一层的结果

    function dfs(nth, index) { // //nth可以用item.length代替
        if (nth === k + 1) {
            res.push(item.slice());
            return;
        }
        for (let i = index; i <= n; i++) {
            item.push(i);
            dfs(nth + 1, i + 1);
            item.pop();
        }
    }
    dfs(1, 1);
    return res;
}

/**
 * @description: n数取k个元素可能组合(无重复子集衍生解法) Cnk
 * @param {number[]}
 * @return {number[][]}
 */
function permutation32(n, k) {
    if (!n) return res;
    let res = []; // 最终结果
    let item = []; // 某一层的结果

    function dfs(index) {
        if (item.length === k) {
            res.push(item.slice());
            return;
        }
        for (let i = index; i <= n; i++) {
            item.push(i);
            dfs(i + 1);
            item.pop();
        }
    }
    dfs(1);
    return res;
}

// test
const nums = [1, 2, 3];
// console.log(permutation21(nums));
console.log(permutation32(4, 2));
