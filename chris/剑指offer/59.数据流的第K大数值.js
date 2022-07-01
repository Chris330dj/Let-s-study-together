/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.sorted = nums.sort((a, b) => b-a);
    this.k = k;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.sorted.push(val);
    for (var i = this.sorted.length - 2; i >= 0 && val > this.sorted[i]; i--) {
        this.sorted[i + 1] = this.sorted[i];
    }
    this.sorted[i + 1] = val;
    if (this.sorted.length < this.k) return null;
    return this.sorted[this.k - 1];
};

// test
const k = 3;
const nums = [4, 5, 8, 2];
var obj = new KthLargest(k, nums);
console.log(obj.add(3));
console.log(obj.add(5));
console.log(obj.add(10));
console.log(obj.add(9));
console.log(obj.add(4));