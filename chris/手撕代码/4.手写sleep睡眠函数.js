// 写一个伪死循环阻塞线程
function sleep1(delay) {
    let start = (new Date()).getTime();
    while ((new Date()).getTime() - start < delay) {
        continue;
    }
}

// promise方式实现延后执行
const sleep = (delay) => {
    return new Promise(resolve => setTimeout(resolve, delay));
}

// async配合promise阻塞线程, 阻塞只发生在async函数里
async function init(){
    console.log('hi.');
    await sleep(1000);
    console.log('another hi.'); // 被await阻塞
}

init();

// sleep(1000).then(()=>{})
// console.log('hi.');
// sleep(1000).then(() => {
//     console.log('another hi.');
// });
// console.log('another hi.');