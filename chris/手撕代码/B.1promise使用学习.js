// 一个标准调用
const p0 = new Promise((resolve, reject) => {
    let status;
    // 一些异步操作，假设返回status来判断成功或失败
    if (status === '200') {
        resolve("reslove msg.");
    } else {
        reject("reject msg.");
    }
})

// 用then捕捉p0的状态, 且指定回调函数对异步中产生的一些值进行处理
p0.then(
    (msg) => {
        console.log('Im in reslove function.');
        console.log(msg);
    },
    (msg) => {
        // console.log('Im in reject function.');
        console.log(msg);
    }
)

// 一些不标准的调用
// p1: 不执行且传入空函数
const p1 = new Promise(() => { });
console.log("p1: ", p1); // Promise { <pending> }

// p2: 执行resolve
const p2 = new Promise((res, rej) => {
    res("success");
})
console.log("p2: ", p2); // Promise { <fulfilled> 'success' }

// p3: 执行reject
const p3 = new Promise((res, rej) => {
    rej("fail");
})
console.log("p3: ", p3); // Promise { <rejected> 'fail' }

// p4: 抛出错误
const p4 = new Promise((res, rej) => {
    throw Error("error");
})
console.log("p4: ", p4); // Promise { <rejected> Error: error at... }

// p5: 先执行 resolve 后执行 reject
const p5 = new Promise((res, rej) => {
    res("success");
    rej("fail");
})
console.log("p5: ", p5); // Promise { <fulfilled> 'success' }

// p6: 什么都不执行且不传参
const p6 = new Promise();
console.log("p6: ", p6); // TypeError: Promise resolver undefined is not a function