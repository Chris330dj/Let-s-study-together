// 实例.__ptoto__ === 类.prototype
function myInstanceof(example, classFunc) {
    let proto = Object.getPrototypeOf(example);
    while (true) {
        if (proto === null) return false;
        if (proto === classFunc.prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
}

console.log(myInstanceof(()=>{}, Function));