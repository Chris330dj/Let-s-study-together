// 函数柯里化
function add() {
    // 第一次获取args, 定义一下
    let args = [...arguments];
    // 第二～n次更新args, 用闭包存储args
    let fn = function () {
        args.push(...arguments);
        return fn;
    }
    fn.toString = function () {
        return args.reduce((pre, val) => pre + val)
    }
    return fn;
}

console.log(+add(1)(2)(3));
console.log(+add(1, 2)(3));
console.log(+add(1, 2, 3));