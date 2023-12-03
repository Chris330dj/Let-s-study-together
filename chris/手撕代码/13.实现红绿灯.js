// 红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；如何让三个灯不断交替重复亮灯？
// 给定亮灯函数
function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}

const light = function (fn, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            fn();
            resolve();
        }, delay);
    })
}

const step = async function () {
    await light(red, 3000);
    await light(green, 2000);
    await light(yellow, 1000);
    await step();
}

step();