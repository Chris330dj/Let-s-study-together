let p1 = { name: "ONE" };
let p2 = { name: "TWO" };
let p3 = { name: "THREE" };
let [word, word0, word1, word2, word3] = ["Hi", "normal", "call", "apply", "bind"];

function Say(w1, w2) {
    let sentence = `${this.name} says: ${w1} ${w2}!`;
    return sentence;
}

// 普通调用
let sentence0 = Say(word, word0);
// 系统函数call
let sentence1 = Say.call(p1, word, word1);
// 系统函数apply
let sentence2 = Say.apply(p2, [word, word2]);
// 系统函数bind 在对象上创建新函数
let newSay = Say.bind(p3);
let sentence3 = newSay(word, word3);
let sentence32 = Say.bind(p3)(word, word3);
let sentence33 = Say.bind(p3, word, word3)();

// console.log(sentence33);

// 实现call
Function.prototype.myCall = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('The call obj is not a function!');
    }
    context = context || window;
    context.fn = this; // 将函数挂载到对象的fn属性上
    const args = [...arguments].slice(1);
    const result = context.fn(...args);
    delete context.fn; // 删除该属性
    return result;
}

// 实现apply
Function.prototype.myApply = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('The apply obj is not a function!');
    }
    context = context || window;
    context.fn = this;
    let result;
    if (arguments[1]) {
        result = context.fn(...arguments[1]);
    } else {
        result = context.fn();
    }
    delete context.fn;
    return result;
}

// 实现bind(不可传参 简单版)
Function.prototype.myBind1 = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('The bind obj is not a function!');
    }
    return (() => {
        return this.call(context);
    })
}

// 实现bind(可传参)
Function.prototype.myBind2 = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('The bind obj is not a function!');
    }
    let fn = this;
    let args = [...arguments].slice(1);
    return function F() {
        return fn.call(context, ...args, ...arguments);
    }
}


// myCall
let sentence_1 = Say.myCall(p1, word, word1);
// myApply
let sentence_2 = Say.myApply(p2, [word, word2]);
// myBind
let sentence_3 = Say.myBind1(p3)(word, word3);
let sentence_31 = Say.myBind2(p3)(word, word3);
let sentence_32 = Say.myBind2(p3, word, word3)();

console.log(sentence_32);