/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    let map = new Map();
    for(let num of nums){
        if(!map.has(num)){
            map.set(num, true);
        }else{
            return num;
        }
    }
    return null;
};

const nums = [2, 3, 1, 0, 2, 5, 3];
console.log(findRepeatNumber(nums));