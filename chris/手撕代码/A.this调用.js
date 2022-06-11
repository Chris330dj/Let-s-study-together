function foo() {
    console.log(this.a);
}

function doFoo(fn) {
    fn();
}

let a = "global a";

let obj = {
    a: "obj a"
}

// obj.foo();

// let bar = obj.foo;
// bar();

// doFoo(obj.foo);

let bar = function(){
    foo.call(obj);
}

setTimeout(() => {
    bar();
}, 500);