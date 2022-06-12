Array.prototype.myMap = function (cb, thisArg) {
    let arr = this;
    let res = [];
    arr.reduce((_, val, index, arr) => {
        res.push(cb.call(thisArg, val, index, arr));
    }, []);
    return res;
}

let arr = [0, 1, 2, 3, 4];
let res = arr.myMap((val, index) => {
    return val * index;
})
console.log(res);