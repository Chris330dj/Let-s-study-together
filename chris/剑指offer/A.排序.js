/**
 * @description: 冒泡排序
 * @return {number[]}
 */
function BubbleSort(arr) {
    if (arr.length <= 1) return arr;
    for (let p = arr.length; p >= 0; p--) {
        for (let i = 0; i < p; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
    }
    return arr;
};

/**
 * @description: 插入排序
 * @return {number[]}
 */
function InsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j; // 注意这个j要在块级作用域外定义
        for (j = i - 1; j >= 0 && temp < arr[j]; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    return arr;
};

/**
 * @description: 选择排序
 * @return {number[]}
 */
 function SelectionSort(arr) {
    if (arr.length < 2) return arr;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                swap(arr, i, j);
            }
        }
    }
    return arr;
};

/**
 * @description: 归并排序1
 * @return {number[]}
 */
function MergeSort1(arr) {
    if (arr.length < 2) return arr;
    // 此处为了节约空间,直接在arr上处理
    iteration_M(arr, 0, arr.length - 1);
    return arr;
};

// lo, hi为两个指针
function iteration_M(arr, lo, hi) {
    // 只有一个元素
    if (lo >= hi) return;
    let mid = lo + Math.floor((hi - lo) / 2);
    // 左边序列排序
    sort1(arr, lo, mid);
    // 右边序列排序
    sort1(arr, mid + 1, hi);
    // 当前元素的左右两边合并
    merge1(arr, lo, mid, hi);
};

function merge1(arr, lo, mid, hi) {
    let copy = JSON.parse(JSON.stringify(arr));
    let i = lo, j = mid + 1, p = lo;
    while (p <= hi) {
        if (j > hi) {
            arr[p++] = copy[i++];
        } else if (i > mid) {
            arr[p++] = copy[j++];
        } else if (copy[i] < copy[j]) {
            arr[p++] = copy[i++];
        } else {
            arr[p++] = copy[j++];
        }
    }
};

/**
 * @description: 归并排序2
 * @return {number[]}
 */
function MergeSort2(arr) {
    if (arr.length < 2) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge2(MergeSort2(left), MergeSort2(right));
};

function merge2(left, right) {
    let res = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            res.push(left.shift());
        } else {
            res.push(right.shift());
        }
    }
    if (left.length === 0) {
        res = res.concat(...right);
    } else if (right.length === 0) {
        res = res.concat(...left);
    }
    return res;
};

/**
 * @description: 快速排序
 * @return {number[]}
 */
function QuickSort(arr) {
    if (arr.length < 2) return;
    let lo = 0;
    let hi = arr.length - 1;
    iteration_Q(arr, lo, hi);
    return arr;
};
// i,j两个位置交换
function swap(arr, i, j) {
    if (i === j) {
        return arr;
    } else {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        return arr;
    }
};
// 随机取数
function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};
// 迭代
function iteration_Q(arr, lo, hi) {
    if (lo >= hi) return;
    // 单层逻辑, p的位置已经确定
    let p = partition(arr, lo, hi);
    iteration_Q(arr, lo, p - 1);
    iteration_Q(arr, p + 1, hi);
};
// 单层逻辑
function partition(arr, lo, hi) {
    // 随机选一个数作为基准值，并与arr[hi]交换
    swap(arr, rand(lo, hi), hi);
    // i用来记录<序列有几个数
    let i, j;
    for (i = lo, j = lo; j < hi; j++) {
        if (arr[j] <= arr[hi]) {
            swap(arr, i, j);
            i++;
        }
    }
    swap(arr, i, j);
    return i;
};

/**
* @description: 堆排序
* @return {number[]}
*/
function Sort2() { };

// 测试区
const array = [1, 4, 6, 2, 4, 1, 0, 8, 9];
// console.log('冒泡排序的结果: ', BubbleSort(array));
// console.log('插入排序的结果: ', InsertionSort(array));
// console.log('归并排序1的结果: ', MergeSort1(array));
// console.log('归并排序2的结果: ', MergeSort2(array));
// console.log('快速排序的结果: ', QuickSort(array));
console.log('选择排序的结果: ', SelectionSort(array));

