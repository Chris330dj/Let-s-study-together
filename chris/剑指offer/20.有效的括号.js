/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let arr = [...s];
    if (arr.length % 2) return false;
    let stack = [];
    let map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    for (let i = 0; i < arr.length; i++) {
        let topOfStack = stack[stack.length - 1];
        if (map[arr[i]] && map[arr[i]] === topOfStack) {
            stack.pop();
        } else {
            stack.push(arr[i]);
        }
    }
    return !stack.length;
};

// 我的解法
var isValid2 = function (s) {
    let arr = [...s];
    if (arr.length % 2) return false;
    let stack = [];
    let i = 0;
    while (i < arr.length) {
        while (/[\{\[\(]/.test(arr[i])) {
            stack.push(arr[i++]);
        }
        while (/[\}\]\)]/.test(arr[i])) {
            let temp = stack[stack.length - 1];
            switch (arr[i++]) {
                case ')':
                    if (temp === '(') {
                        stack.pop();
                    } else {
                        stack.push(arr[i]);
                    }
                    break;
                case ']':
                    if (temp === '[') {
                        stack.pop();
                    } else {
                        stack.push(arr[i]);
                    }
                    break;
                case '}':
                    if (temp === '{') {
                        stack.pop();
                    } else {
                        stack.push(arr[i]);
                    }
                    break;
            }
        }
    }
    return !stack.length;
};

// test
const s = "()"
console.log(isValid(s));
