// 防抖 ES5写法
function debounce(fn, wait) {
    let timer = null;
    return function () {
        // 需修正this和event对象的指向问题
        let context = this;
        let args = arguments;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, wait);
    }
}
// 防抖2 ES6写法
function debounce2(fn, wait) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, wait);
    }
}
//
let debounceFn = debounce(function () { }, 1000);

// 节流
function throttle(fn, delay) {
    let preTime = Date.now();
    return function () {
        let nowTime = Date.now();
        if (nowTime - preTime >= delay) {
            preTime = nowTime;
            fn.apply(this, arguments);
        }
    }
}