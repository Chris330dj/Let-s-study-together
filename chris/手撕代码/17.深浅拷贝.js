// test
let a = {
    name: 'chris',
    age: 1,
    // 浅拷贝的局限
    idol: {
        name: 'hebe',
        age: 2
    },
    // JSON的局限
    bf: undefined,
    jobs: function (x) { return x },
    reg: /\s/g
};


// 【浅拷贝】
// 用 Object.assign(target, source)
let b1 = Object.assign({}, a);
// 用扩展运算符(...)
let b2 = { ...a };

// 【深拷贝】
// 用JSON方法
let c1 = JSON.parse(JSON.stringify(a));

// 实现深拷贝(简单)
function deepClone(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    let copy = {};
    if (obj.constructor === Array) {
        copy = [];
    }
    for (let key in obj) {
        // 如果key是对象的自有属性
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepClone(obj[key]);
        }
    }
    return copy;
}
let c2 = deepClone(a);

//TODO: 实现深拷贝(复杂)


// test
a.name = 'jack';
a.idol.age = 20;
console.log(c2);


