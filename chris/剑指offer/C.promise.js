//* 题1:
// const promise1 = new Promise((resolve, reject) => {
//     console.log('promise1')
// })
// console.log('1', promise1);

//* 题2:
// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve('success')
//     console.log(2);
// });
// promise.then(() => {
//     console.log(3);
// });
// console.log(4);

//* 题3:
// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     console.log(2);
// });
// promise.then(() => {
//     console.log(3);
// });
// console.log(4);

//* 题4:
// const promise1 = new Promise((resolve, reject) => {
//     console.log('promise1')
//     resolve('resolve1')
// })
// const promise2 = promise1.then(res => {
//     console.log(res)
// })
// console.log('1', promise1);
// console.log('2', promise2);

//* 题5:
// const fn = () => (new Promise((resolve, reject) => {
//     console.log(1);
//     resolve('success')
// }))
// fn().then(res => {
//     console.log(res)
// })
// console.log('start')

//* 题6:
// const fn = () =>
//     new Promise((resolve, reject) => {
//         console.log(1);
//         resolve("success");
//     });
// console.log("start");
// fn().then(res => {
//     console.log(res);
// });

//* setTimeout
//* 题1:
// console.log('start')
// setTimeout(() => {
//     console.log('time')
// })
// Promise.resolve().then(() => {
//     console.log('resolve')
// })
// console.log('end')

//* 题2:
// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     setTimeout(() => {
//         console.log("timerStart");
//         resolve("success");
//         console.log("timerEnd");
//     }, 0);
//     console.log(2);
// });
// promise.then((res) => {
//     console.log(res);
// });
// console.log(4);

//* 题3.1:
// setTimeout(() => {
//     console.log('timer1');
//     setTimeout(() => {
//         console.log('timer3')
//     }, 0)
// }, 0)
// setTimeout(() => {
//     console.log('timer2')
// }, 0)
// console.log('start')

//* 题3.2:
// setTimeout(() => {
//     console.log('timer1');
//     Promise.resolve().then(() => {
//         console.log('promise')
//     })
// }, 0)
// setTimeout(() => {
//     console.log('timer2')
// }, 0)
// console.log('start')

// 题3.3:
// Promise.resolve().then(() => {
//     console.log('promise1');
//     const timer2 = setTimeout(() => {
//         console.log('timer2')
//     }, 0)
// });
// const timer1 = setTimeout(() => {
//     console.log('timer1')
//     Promise.resolve().then(() => {
//         console.log('promise2')
//     })
// }, 0)
// console.log('start');

// 题4
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('success')
//     }, 1000)
// })
// const promise2 = promise1.then(() => {
//     throw new Error('error!!!')
// })
// console.log('promise1', promise1)
// console.log('promise2', promise2)
// setTimeout(() => {
//     console.log('promise1', promise1)
//     console.log('promise2', promise2)
// }, 2000)

//* 题5:
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("success");
//         console.log("timer1");
//     }, 1000);
//     console.log("promise1里的内容");
// });
// const promise2 = promise1.then(() => {
//     throw new Error("error!!!");
// });
// console.log("promise1", promise1);
// console.log("promise2", promise2);
// setTimeout(() => {
//     console.log("timer2");
//     console.log("promise1", promise1);
//     console.log("promise2", promise2);
// }, 2000);

//* 3.6
Promise.resolve().then(() => {
    return new Error('error!!!')
}).then(res => {
    console.log("then: ", res)
}).catch(err => {
    console.log("catch: ", err)
})

