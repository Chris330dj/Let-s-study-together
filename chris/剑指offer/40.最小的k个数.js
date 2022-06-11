/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
    if (arr.length < 2) return arr;
    for (let i = 0; i < k; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr.slice(0, k);
};

//
const arr = [0,1,2,1];
const k = 1;
console.log(getLeastNumbers(arr, k));