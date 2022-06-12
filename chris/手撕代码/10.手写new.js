function myNew(constructor, ...args) {
    // let obj = {};
    // obj.__proto__ =  constructor.prototype;
    let obj = Object.create(constructor.prototype);
    let res = constructor.apply(obj, args);
    // 确保返回的是一个对象(万一fn不是构造函数)
    return typeof res === 'object' ? res : obj;
}

//
function A(name) {
    this.name = name;
}

let a1 = myNew(A, 'One');
let a2 = new A('Two');
console.log(a1, a2);