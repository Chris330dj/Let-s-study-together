/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences1 = function (pushed, popped) {
    // 因为说明了pushed 是 popped 的排列,所以不存在两个数组长度不同的情况。
    let len = pushed.length;
    if (!len) return true;
    let stack = [];
    let i = 0;
    let j = 0;
    let k = -1;
    while (i < len) {
        while (i < len) {
            stack.push(pushed[i]);
            i++;
            k++;
            if (stack[k] === popped[j]) break;
        }
        while (k >= 0 && popped[j] === stack[k]) {
            stack.pop();
            k--;
            j++;
        }
    }
    return !stack.length;
};

// 优化: while (i < len) + i++ 可以优化成for()
// 可以在遍历pushed每个元素的时候都判断stack与pop的关系
// k只是做了存储stack长度和取最后一位的操作, 可以简化
var validateStackSequences = function (pushed, popped) {
    let len = pushed.length;
    if (!len) return true;
    let stack = [];
    let j = 0;
    for (let i = 0; i < len; i++) {
        stack.push(pushed[i]);
        while (stack.length && popped[j] === stack[stack.length - 1]) {
            stack.pop();
            j++;
        }
    }
    return !stack.length;
};

//
const pushed = [2, 1, 0];
const popped = [2, 1, 0];
console.log(validateStackSequences(pushed, popped));