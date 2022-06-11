/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    const len = numbers.length;
    if (len < 2 || numbers[0] < numbers[len - 1]) return numbers[0];
    let cur = 0;
    let next = cur + 1;
    while (cur < len && next < len) {
        if (numbers[cur] > numbers[next]) {
            return numbers[next];
        } else {
            cur++;
            next++;
        }
    }
    return numbers[0];
};

var minArray2 = function (numbers) {
    // 只有一个数或者没有旋转（单调增）
    let l = 0;
    let r = numbers.length - 1;
    if (l === r || numbers[l] < numbers[r]) return numbers[0];
    while (l < r) {
        let m = Math.floor((r - l) / 2) + l;
        if (numbers[m] > numbers[r]) {
            // 这里m肯定不是最小，所以可以+1
            l = m + 1;
        } else if (numbers[m] < numbers[r]) {
            r = m;
        } else {
            r--;
        }
    };
    return numbers[l];
};

const numbers = [2, 2, 2, 0, 1];
// const numbers = [3, 1, 3, 3];
console.log(minArray2(numbers));