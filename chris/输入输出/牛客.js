// // func(a, b)时
while (line = readline()) {
    let lines = line.split(' ');
    let a = parseInt(lines[0]);
    let b = parseInt(lines[1]);
    print(a + b);
}

// // func(arr)时
while (line = readline()) {
    if(line === '0') break;
    let arr = line.split(' ').map(Number);
    arr = arr.slice(1);
    let res = arr.reduce((pre, cur) => {
        return pre + cur;
    }, 0)
    print(res);
}

const arr = [4,1,2,3,4];
let res = arr.reduce((pre, cur) => {
    return pre + cur;
}, 0)
console.log(res);