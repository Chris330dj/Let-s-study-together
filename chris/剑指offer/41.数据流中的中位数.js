/**
 * initialize your data structure here.
 */
class MaxHeap {
    constructor() {
        this.heap = [];
    }
    getSize() {
        return this.heap.length;
    }
    _isEmpty() {
        return !this.getSize();
    }
    _getLeftIndex(i) {
        return 2 * i + 1;
    }
    _getRightIndex(i) {
        return 2 * i + 2;
    }
    _getParentIndex(i) {
        if (!i) return;
        return Math.floor((i - 1) / 2);
    }
    _compareFn(i, j) {
        return (this.heap[i] >= this.heap[j]);
    }
    _swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    _swim(index) {
        let parentIndex = this._getParentIndex(index);
        while (index > 0 && this._compareFn(index, parentIndex)) {
            this._swap(index, parentIndex);
            index = parentIndex;
            parentIndex = this._getParentIndex(index);
        }
    }
    _sink(index) {
        this._swap(index, this.getSize() - 1);
        this.heap.pop();
        // 判断当前交换节点有无左节点, 有左必有右
        while (this._getLeftIndex(index) < this.getSize()) {
            let leftIndex = this._getLeftIndex(index);
            let rightIndex = leftIndex + 1;
            let biggerIndex = leftIndex;
            if (rightIndex < this.getSize() && this._compareFn(rightIndex, leftIndex)) {
                biggerIndex = rightIndex;
            }
            if (this._compareFn(biggerIndex, index)) {
                this._swap(biggerIndex, index);
            }
            index = biggerIndex;
        }
    }
    insert(val) {
        if (val !== null) {
            this.heap.push(val);
            if (this.getSize() > 1) {
                this._swim(this.getSize() - 1);
            }
            return true;
        }
        return false;
    }
    removeTop() {
        if (this._isEmpty()) {
            return;
        }
        if (this.getSize() === 1) {
            return this.heap.shift();
        }
        const max = this.heap[0];
        this._sink(0);
        return max;
    }
    getTop() {
        if (this._isEmpty()) {
            return;
        }
        return this.heap[0];
    }
    printHeap() {
        console.log(this.heap);
    }
}

// MaxHeap与MinHeap的区别是比较函数,只需要extend再扩展就行
class MinHeap extends MaxHeap {
    constructor() {
        super(); // 调用父类构造函数
    }
    _compareFn(i, j) {
        return (this.heap[i] <= this.heap[j]);
    }
}

var MedianFinder = function () {
    this.minHeap = new MinHeap();
    this.maxHeap = new MaxHeap();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    if (this.minHeap.getSize() === this.maxHeap.getSize()) {
        //当前为偶
        this.maxHeap.insert(num);
        this.minHeap.insert(this.maxHeap.removeTop());
    } else {
        //当前为奇
        this.minHeap.insert(num);
        this.maxHeap.insert(this.minHeap.removeTop());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    if (this.minHeap.getSize() === this.maxHeap.getSize()) {
        //当前为偶
        return (this.minHeap.getTop() + this.maxHeap.getTop()) / 2;
    } else {
        //当前为奇
        return this.minHeap.getTop();
    }
};




//
var obj = new MedianFinder();
obj.addNum(1);
console.log(obj.findMedian());
