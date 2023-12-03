// 根据接收的参数数量判断curry函数是返回带部分参数的函数fn，还是返回函数fn的执行结果
// ES5 实现
function curry1(fn, args) {
    let len = fn.length; // 该函数所需参数数量
    args = args || [];
    return function () {
        args.push(...arguments);
        if (args.length >= len) {
            // function(){}匿名函数默认绑定window
            return fn.apply(this, args);
            // return fn(...args);
        } else {
            return curry.call(this, fn, args);
            // return curry(fn, args);
        }
    }
}

// ES6实现 用bind实现
function curry(fn, ...args) {
    if(fn.length <= args.length){
        return fn(...args);
    }else{
        // null是因为不需要改变this
        return curry.bind(null, fn, ...args);
    }
}

// test
let add = curry((a, b, c) => {
    return a + b + c;
});
// console.log(add(1)(2)(3));
// console.log(add(1, 2)(3));
// console.log(add(1)(2, 3));


