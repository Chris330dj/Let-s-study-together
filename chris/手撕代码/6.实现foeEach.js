// arr.forEach(callbackFn: (value: number, index: number, array: number[]) => void, thisArg ?: any)

Array.prototype.myForEach = function (cb, context) {
    let arr = this;
    if (!Array.isArray(arr)) throw new TypeError('forEach is not provided for non-array object.')
    for (let i = 0; i < arr.length; i++) {
        typeof cb === 'function' && cb.call(context, arr[i], i, arr);
    }
};

let arr = [1, 2, 3, 4];
arr.myForEach((val, i) => {
    console.log(val, i);
})