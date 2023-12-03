// 归并排序
var reversePairs = function (nums) {
    if (nums.length < 2) return 0;
    let count = 0;
    function Sort(arr) {
        if (arr.length < 2) return arr;
        let midIndex = arr.length >> 1;
        let left = Sort(arr.slice(0, midIndex));
        let right = Sort(arr.slice(midIndex));
        // 合并
        let mergeArr = [];
        let p = 0, q = 0;
        while (p < left.length && q < right.length) {
            if (left[p] <= right[q]) {
                mergeArr.push(left[p]);
                p++;
            } else {
                mergeArr.push(right[q]);
                q++;
                count += left.length - p;
            }
        }
        if (p < left.length) {
            mergeArr.push(...left.slice(p));
        }
        if (q < right.length) {
            mergeArr.push(...right.slice(q));
        }
        return mergeArr;
    }
    Sort(nums);
    return count;
};

// test
const nums = [7, 5, 6, 4];
console.log(reversePairs(nums));



function MergeSort(arr) {
    if (arr.length < 2) return arr;
    let count = 0;
    function Sort(arr) {
        if (arr.length < 2) return arr;
        let midIndex = arr.length >> 1;
        let left = Sort(arr.slice(0, midIndex));
        let right = Sort(arr.slice(midIndex));
        // 合并
        let mergeArr = [];
        let p = 0, q = 0;
        while (p < left.length && q < right.length) {
            if (left[p] <= right[q]) {
                mergeArr.push(left[p]);
                p++;
            } else {
                mergeArr.push(right[q]);
                q++;
                count += left.length - p;
            }
        }
        if (p < left.length) {
            mergeArr.push(...left.slice(p));
        }
        if (q < right.length) {
            mergeArr.push(...right.slice(q));
        }
        return mergeArr;
    }
    return Sort(arr);
}
