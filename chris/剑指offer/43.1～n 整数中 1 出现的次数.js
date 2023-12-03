/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
    let figureCount = n.toString().length; // n是几位数
    let sumList = getFullOneList(figureCount);

    // 计算当前位数有多少1
    function calculate(num) {
        let count = 0;
        // 一位数情况
        if (num < 10) {
            if (num >= 1) {
                count += 1;
            }
        } else {
            let [figureCount, first, remain] = splitNum(num);
            // 首位1计数
            if (first === 1) {
                count += remain + 1;
            } else {
                count += Math.pow(10, figureCount - 1);
            }
            count += sumList[figureCount - 1] * first;
            // 剩余数
            count += calculate(remain);
        }
        return count;
    }

    return calculate(n);
};

// 取出位数, 首位和剩余数字, 例 将120拆分为[3 1 20]
function splitNum(num) {
    let list = num.toString().split('');
    let figureCount = list.length; // 几位数
    let firstNum = Number(list.shift());
    let remainNum = Number(list.join(''));
    return [figureCount, firstNum, remainNum];
}

// 计算满n位数有多少1, 如0-99
function getFullOneList(n) {
    let res = [0, 1];
    for (let i = 2; i <= n; i++) {
        let temp = Math.pow(10, i-1) + 10 * res[i - 1];
        res.push(temp);
    }
    return res;
}


console.log(countDigitOne(100));
