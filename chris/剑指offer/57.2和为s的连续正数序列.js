/**
 * @param {number} target
 * @return {number[][]}
 */

// 求和公式
function getSum(x, y) {
    return (x + y) * (Math.abs(x - y) + 1) / 2;
}
// 暴力解法
var findContinuousSequence1 = function (target) {
    let res = [];
    for (let i = 1; i <= (target / 2); i++) {
        let j = i + 1;
        let arr = [i];
        while (j < target) {
            if (getSum(i, j) === target) {
                arr.push(j);
                res.push(arr);
                break;
            } else if (getSum(i, j) < target) {
                arr.push(j);
                j++;
            } else {
                break;
            }
        }
    }
    return res;
};

// 滑动窗口法
var findContinuousSequence = function (target) {
    let res = []; // 最终结果
    let i = 1, j = 2, sum = 3;
    let window = [1, 2]; // 当前窗口
    while (i <= target/2) {
        if (sum === target) {
            res.push([...window]); // 注意
        }
        if (sum < target) {
            j++;
            sum += j;
            window.push(j);
        } else {
            // >0 或 =0
            sum -= i;
            i++;
            window.shift();
        }
    }
    return res;
};


//
const target = 15;
console.log(findContinuousSequence(target));