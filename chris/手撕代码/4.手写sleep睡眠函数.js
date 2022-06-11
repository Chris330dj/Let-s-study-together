// 写一个伪死循环阻塞线程
function sleep1(delay) {
    let start = (new Date()).getTime();
    while ((new Date()).getTime() - start < delay) {
        continue;
    }
}

const sleep = (delay) => {
    return new Promise(resolve => setTimeout(resolve, delay));
}

// sleep(1000).then(()=>{})

console.log('hi.');
sleep(1000).then(() => {
    console.log('another hi.');
});
// console.log('another hi.');