let count = (function () {
    let num = 0;
    return function () {
        num++;
        console.log('现在count第', num, '次了!')
        return num;
    }
})();

//
let a = count();
let b = count();
