// 一个简单的例子
function foo() {
    const a = 1;
    function bar() {
        // console.log(a);
    }
    return bar;
}

var baz = foo();
baz();

// 另一个简单的例子
function Count() {
    let n = 0;
    this.add = () => {
        console.log(++n);
    }
}
let count = new Count();
count.add();
count.add();

// 用闭包来解决问题
for (var i = 0; i < 5; i++) {
    setTimeout(function timer() {
        // 间隔1秒输出5 5 5 5 5
        // console.log(i)
    }, i * 500)
}

// 因为回调是在循环结束后执行的，外面的i和里面的i都是在每次迭代中分别定义。但是里面的i共享的是同一个全局作用域，
// 所以会i会等于延时函数运行时该作用域中i的值

// 可以这样改
// IIFE会在每次迭代时创建一个闭包存储当前i值，输出就会变成0 1 2 3 4
for (var i = 0; i < 5; i++) {
    (function (j) {
        setTimeout(function timer() {
            // 间隔1秒输出五次5
            // console.log(j)
        }, j * 500)
    })(i)
}

// 也可以改成
// 此时的i存在于单独的块级作用域中，互不干扰
for (let i = 0; i < 5; i++) {
    setTimeout(function timer() {
        // 间隔1秒输出五次5
        // console.log(i)
    }, i * 500)
}