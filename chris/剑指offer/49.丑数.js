/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber1 = function (n) {
    let uglyArr = [1];
    let uglyArr2 = [2];
    let uglyArr3 = [3];
    let uglyArr5 = [5];
    if (n < 1) return 0;
    for (let p = 0, i = 0, j = 0, k = 0; p <= n; p++) {
        let curMin = uglyArr2[i];
        if (uglyArr2[i] <= uglyArr3[j] && uglyArr2[i] <= uglyArr5[k]) {
            i++;
        } else if (uglyArr3[j] <= uglyArr2[i] && uglyArr3[j] <= uglyArr5[k]) {
            curMin = uglyArr3[j];
            j++;
        } else if (uglyArr5[k] <= uglyArr2[i] && uglyArr5[k] <= uglyArr3[j]) {
            curMin = uglyArr5[k];
            k++;
        }
        while (uglyArr2[i] === curMin) i++;
        while (uglyArr3[j] === curMin) j++;
        while (uglyArr5[k] === curMin) k++;
        uglyArr.push(curMin);
        uglyArr2.push(curMin * 2);
        uglyArr3.push(curMin * 3);
        uglyArr5.push(curMin * 5);
    }
    return uglyArr[n - 1];
};

// 优化1: *2 *3 *5不需要写成序列，只要在uglyArr上移动指针
var nthUglyNumber2 = function (n) {
    let uglyArr = [1];
    let ugly2 = 2;
    let ugly3 = 3;
    let ugly5 = 5;
    if (n < 1) return 0;
    for (let p = 0, i = 0, j = 0, k = 0; p <= n; p++) {
        [ugly2, ugly3, ugly5] = [uglyArr[i] * 2, uglyArr[j] * 3, uglyArr[k] * 5];
        let curMin;
        if (ugly2 <= ugly3 && ugly2 <= ugly5) {
            curMin = ugly2;
            i++;
        } else if (ugly3 < ugly2 && ugly3 <= ugly5) {
            curMin = ugly3;
            j++;
        } else if (ugly5 < ugly2 && ugly5 < ugly3) {
            curMin = ugly5;
            k++;
        }
        uglyArr.push(curMin);
        while (uglyArr[i] * 2 === curMin) i++;
        while (uglyArr[j] * 3 === curMin) j++;
        while (uglyArr[k] * 5 === curMin) k++;
    }
    return uglyArr[n - 1];
};

// 优化2: 比大小部分太丑了, 改成Math.min, while没必要, 因为丑数数组是不同的
var nthUglyNumber3 = function (n) {
    let uglyArr = [1];
    let ugly2 = 2;
    let ugly3 = 3;
    let ugly5 = 5;
    let p2 = 0, p3 = 0, p5 = 0;
    for (let i = 1; i < n; i++) {
        [ugly2, ugly3, ugly5] = [uglyArr[p2] * 2, uglyArr[p3] * 3, uglyArr[p5] * 5];
        let curMin = Math.min(ugly2, ugly3, ugly5);
        uglyArr.push(curMin);
        if (ugly2 === curMin) p2++;
        if (ugly3 === curMin) p3++;
        if (ugly5 === curMin) p5++;
    }
    return uglyArr[n - 1];
};

console.log(nthUglyNumber3(10));