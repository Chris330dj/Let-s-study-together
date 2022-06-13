// 实现 Promise.resolve
Promise.resolve = (param) => {
    if (param instanceof Promise) return param;
    return new Promise((resolve, reject) => {
        if (param && param.then && typeof param.then === 'function') {
            param.then(resolve, reject);
        } else {
            return resolve(param);
        }
    })
}
// test
// const p1 = Promise.resolve(2);
// const p2 = Promise.resolve(() => { });

// 实现 Promise.reject
Promise.reject = function (reason) {
    return new Promise((resolve, reject) => {
        reject(reason);
    })
}

// 实现 Promise.prototype.finally
Promise.prototype.finally = function (onfinally) {
    return this.then(
        success => {
            return Promise.resolve(onfinally()).then(() => success);
        },
        error => {
            return Promise.reject(onfinally()).then(() => error);
        }
    )
}
// 异步写法
Promise.prototype.finally = function (onfinally) {
    return this.then(
        async success => {
            await Promise.resolve(onfinally());
            return success;
        },
        async error => {
            await Promise.reject(onfinally());
            return error;
        }
    )
}
// test
// Promise.resolve(123).finally(() => {
//     console.log('done'); // done
// });
// Promise.reject(123).finally(() => {
//     console.log('done'); // done
// });

// 实现 Promise.all
Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        let result = []; // promises的结果存放在这里
        let count = 0;
        let len = promises.length;
        if (len === 0) {
            resolve(result);
            return;
        }
        for (let i = 0; i < len; i++) {
            Promise.resolve(promises[i])
                .then(data => {
                    result[i] = data;
                    count++;
                    if (count === len) resolve(result);
                })
                .catch(err => {
                    reject(err);
                })
        }
    })
}
// test
// const p1 = Promise.resolve(3);
// const p2 = 4;
// const p3 = new Promise(resolve => {
//     setTimeout(resolve, 1000, 'chris');
// });
// Promise.all([p1, p2, p3]).then(res =>{
//     console.log(res);
// })

// 实现 Promise.allSettled
function promiseAllSettled(promises) {
    return new Promise((reslove, reject) => {
        let len = promises.length;
        let result = [];
        promises.forEach((promise, i) => {
            Promise.resolve(promise).then(
                (value) => {
                    result[i] = {
                        status: "fulfilled",
                        value
                    }
                    len--;
                    if (len === 0) reslove(result);
                },
                (reason) => {
                    result[i] = {
                        status: "rejected",
                        reason
                    };
                    len--;
                    if (len === 0) reslove(result);
                }
            );
        });
    })
}

// test
// const p1 = Promise.resolve(2);
// const p2 = Promise.reject(-1);
// const p3 = new Promise((res, rej) => {
//     setTimeout(res, 1000, 'res');
// })
// const p4 = new Promise((res, rej) => {
//     setTimeout(rej, 300, 'rej');
// })
// promiseAllSettled([p1, p2, p3, p4]).then(res => {
//     console.log(res);
// })


// 实现 Promise.race
Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        let len = promises.length;
        if (!len) return;
        for (let i = 0; i < len; i++) {
            Promise.resolve(promises[i]).then(
                data => {
                    resolve(data);
                },
                err => {
                    reject(err);
                }
            )
        }
    })
}

// test
// const p1 = new Promise(resolve => {
//     setTimeout(resolve, 105, 'p1 done');
// });
// const p2 = new Promise(resolve => {
//     setTimeout(resolve, 100, 'p2 done');
// });
// Promise.race([p1, p2]).then(data => {
//     console.log(data); // p2 done，可以看到 p2 先被执行，执行完就结束了
// });


// 实现 Promise(简单)
class MyPromise {
    constructor(fn) {
        this.resolvedCallbacks = [];
        this.rejectedCallbacks = [];

        this.state = 'PENDING';
        this.value = '';

        fn(this.resolve.bind(this), this.reject.bind(this));

    }

    resolve(value) {
        if (this.state === 'PENDING') {
            this.state = 'RESOLVED';
            this.value = value;

            this.resolvedCallbacks.map(cb => cb(value));
        }
    }

    reject(value) {
        if (this.state === 'PENDING') {
            this.state = 'REJECTED';
            this.value = value;

            this.rejectedCallbacks.map(cb => cb(value));
        }
    }

    then(onFulfilled, onRejected) {
        if (this.state === 'PENDING') {
            this.resolvedCallbacks.push(onFulfilled);
            this.rejectedCallbacks.push(onRejected);

        }

        if (this.state === 'RESOLVED') {
            onFulfilled(this.value);
        }

        if (this.state === 'REJECTED') {
            onRejected(this.value);
        }
    }
}

// 实现 Promise(升级)