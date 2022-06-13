// promise简单实现
class Promise {
    // promise的三种状态
    PENDING = "PENDING";
    FULFILLED = "FULFILLED";
    REJECTED = "REJECTED";

    constructor(executor) {
        this.value = undefined;
        this.reason = undefined;
        this.status = this.PENDING;
        // 存储订阅的onFulfilled函数和onRejected函数
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        // 定义reslove和reject函数
        const resolve = (value) => {
            if (this.status === this.PENDING) {
                // 更新value和promise状态
                this.value = value;
                this.status = this.FULFILLED;
                // 依次执行订阅组中的onFulfilled函数
                this.onFulfilledCallbacks.forEach(cb => cb(this.value));
            }
        };
        const reject = (reason) => {
            if (this.status === this.PENDING) {
                this.reason = reason;
                this.status = this.REJECTED;
                // 依次执行订阅组中的onRejected函数
                this.onRejectedCallbacks.forEach(cb => cb(this.reason));
            }
        };

        // 构造器立即执行
        // 捕获 executor 异常
        try {
            executor(resolve, reject);
        } catch (e) {
            // 当发生异常时，调用 reject 函数
            reject(e);
        }

    }

    // 实现then方法
    then(onFulfilled, onRejected) {
        // 判断参数是否为函数，如果不是函数则用默认函数代替(这里的默认函数写的透传)
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (v) => v;
        onRejected = typeof onRejected === "function" ? onRejected : (e) => { throw e };
        let promise2 = new Promise((resolve, reject) => {
            // 当状态为 Fulfilled 时，调用 onFulfilled函数
            if (this.status === this.FULFILLED) {
                // 添加异常捕获
                try {
                    // 返回值作为 resolve 的参数值
                    let x = onFulfilled(this.value);
                    resolve(x);
                } catch (e) {
                    reject(e);
                }

            }
            // 当状态为 Rejected 时，调用 onRejected 函数
            if (this.status === this.REJECTED) {
                try {
                    let x = onRejected(this.reason);
                    resolve(x);
                } catch (e) {
                    reject(e);
                }
            }
            // 当状态为 Pending 时，将回调函数订阅至订阅组callbacks[]
            if (this.status === this.PENDING) {
                // 使用匿名函数，将 resovle 与 onFulfilled 捆绑在一起
                this.onFulfilledCallbacks.push(() => {
                    try {
                        let x = onFulfilled(this.value);
                        resolve(x);
                    } catch (e) {
                        reject(e);
                    }
                });
                this.onRejectedCallbacks.push(() => {
                    try {
                        let x = onRejected(this.reason);
                        resolve(x);
                    } catch (e) {
                        reject(e);
                    }
                });
            }
        })
        return promise2;
    }
}

// 简单测试样例 🌰 
// const p = new Promise((resolve, reject) => {
//     // resolve("success normal");
//     // 用setTimeout模拟异步
//     setTimeout(() => {
//         resolve("success time");
//     }, 1000)
// })
// p.then((v) => {
//     console.log('1: ', v);
// });
// p.then((v) => {
//     console.log('2: ', v);
// });


// 异步测试样例 [1 3 5 2 4] 🌰 
// console.log(1);
// setTimeout(() => {
//     console.log(2);
// })
// const p1 = new Promise((resolve) => {
//     console.log(3);
//     setTimeout(() => {
//         resolve(4);
//     })
// })
// p1.then(v => console.log(v));
// console.log(5);


// 带异常的链式调用样例 🌰 
// console.log(new Promise((resolve) => {
//     resolve(1)
// }).then(() => {
//     throw new Error('resolve err')
// }))
// console.log(new Promise((resolve, reject) => {
//     reject(1)
// }).then(undefined, () => {
//     throw new Error('reject err')
// }))


// 带值传递的链式调用样例 🌰 
// // 输出结果为 4，可以说明resolve状态的链式调用是可行的，并且实现了值传递
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1);
//     });
// });
// p1.then((v) => v + 1)
//     .then((v) => v * 2)
//     .then()
//     .then((v) => console.log(v));

// // 输出 Error1，说明链式调用仍然是成功的。
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(1);
//     });
// });
// p2.then(
//     () => { },
//     (r) => new Error(r)
// ).then(
//     (v) => console.log("v", v),
//     (r) => console.log("r", r)
// );