// 数组扁平化
// 用for递归
function flatten1(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res.push(...flatten1(arr[i]));
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}

// 用reduce递归
function flatten2(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten2(cur) : cur);
    }, []);
}

// 用扩展运算符递归(用...摊开)
function flatten3(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}

// 用库函数flat
function flatten4(arr) {
    return arr.flat(Infinity);
}

// 用split将数组分开,再用toString获取值
function flatten5(arr) {
    let res = arr.toString().split(',');
    // 需要手动剔除数组中的空值元素
    res = res.filter(val => (val !== ''));
    return res.map(Number);
}

// 用 [stringify + 正则] 实现 toString()
function flatten6(arr) {
    let str = JSON.stringify(arr);
    str = str.replace(/(\[|\])/g, '');
    // 如果没有空数组，可以用JSON.parse(`[${str}]`)得到结果
    // flatten5的步骤
    let res = str.split(',');
    res = res.filter(val => (val !== ''));
    return res.map(Number);
}

// test
const arr = [[1, 2, 3], 4, [], 5, 6, [[7]], []];
console.log(flatten6(arr));
