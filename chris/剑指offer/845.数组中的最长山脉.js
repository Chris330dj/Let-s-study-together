/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain1 = function (arr) {
    if (arr.length < 3) return 0;
    let longest = 0; // 存储最长子数组的长度
    let curLen = 1; // 当前山脉长度
    let preK = 0; // 当前位于 上下坡(-1表示下坡，0表示只有一个点，1表示上坡)
    for (let i = 1; i < arr.length; i++) {
        let curK = arr[i] - arr[i - 1];
        if (preK === 0) {
            if (curK > 0) {
                curLen++;
                preK = curK;
            } else {
                curLen = 1;
            }
        } else if (preK > 0) {
            if (curK == 0) {
                curLen = 1;
                preK = 0;
            } else {
                curLen++;
                preK = curK;
            }
        } else {
            if (curK > 0) {
                curLen = 2;
            } else if (curK === 0) {
                curLen = 1;
            } else {
                curLen++;
            }
            preK = curK;
        }
        if ((preK < 0) && (curLen >= 3) && (curLen > longest)) {
            longest = curLen;
        }
    }
    return longest;
};

// 记录每个山脉上升区间和下降区间的长度
var longestMountain = function (arr) {
    let len = arr.length;
    if (len < 3) return 0;
    let maxLen = 0;
    let i = 1;
    while (i < len) {
        let uphill = 0, downhill = 0;
        while ((i < len) && (arr[i - 1] < arr[i])) {
            i++;
            uphill++;
        }
        while ((i < len )&& (arr[i - 1] > arr[i])) {
            i++;
            downhill++;
        }
        if ((uphill > 0) && (downhill > 0)) {
            maxLen = Math.max(maxLen, uphill + downhill + 1);
        }
        while ((i < len) && (arr[i - 1] === arr[i])) i++;
    }
    return maxLen;
};

// test
const arr = [0, 1, 0];
console.log(longestMountain(arr));
