// p1: 执行 resolve
const p1 = new Promise((resolve, reject) => {
    resolve(1);
})
p1.then(
    (value) => {
        console.log("onFulfilled: ", value); // onFulfilled:  1
    },
    (reason) => {
        console.log("onRejected: ", reason);
    }
)

// p2: 执行reject
const p2 = new Promise((resolve, reject) => {
    reject(2);
})
p2.then(
    (v) => {
        console.log("onFulfilled: ", v);
    },
    (r) => {
        console.log("onRejected: ", r); // onRejected:  2
    }
)

// p3: 抛出异常
const p3 = new Promise((res, rej) => {
    throw new Error("promise执行出现错误");
})
p3.then(
    (v) => {
        console.log("onFulfilled: ", v);
    },
    (r) => {
        console.log("onRejected: ", r); // onRejected:  Error: promise执行出现错误
    }
)