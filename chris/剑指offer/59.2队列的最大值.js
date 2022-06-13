var MaxQueue = function () {
    this.queue = [];
    this.maxIndexQueue = [];
    this.left = 0; // queue中当前font位置
};

/**
 * @return {number}
 */
MaxQueue.prototype.get_value = function (index) {
    return this.queue[this.maxIndexQueue[index]];
}

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
    if (!this.maxIndexQueue.length) return -1;
    return this.get_value(0);
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
    this.queue.push(value);
    // 这里维护的是一个非单增序列，同样值的数是保留的，可以不用left指针直接控制queue.shift()
    // 同时maxIndexQueue里可以直接存值
    // 如果这里的判断是>=，就需要maxIndexQueue里存index指针。59.1同理。
    while (this.maxIndexQueue.length && value > this.get_value(this.maxIndexQueue.length - 1)) {
        this.maxIndexQueue.pop();
    }
    this.maxIndexQueue.push(this.queue.length - 1);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
    if (this.queue.length <= this.left) return -1;
    if (this.maxIndexQueue[0] === this.left) this.maxIndexQueue.shift();
    return this.queue[this.left++];
};

// Your MaxQueue object will be instantiated and called as such:
var obj = new MaxQueue()
obj.push_back(1)
obj.push_back(2)
var param_1 = obj.max_value()
var param_2 = obj.pop_front()
var param_3 = obj.max_value()

console.log(param_1, param_2, param_3);