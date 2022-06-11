/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
    function isPosterOrder(l, r) {
        if (l >= r) return true;
        let p = l;
        while (postorder[p] < postorder[r]) {
            p++;
        }
        let midIndex = p;
        while (postorder[p] > postorder[r]) {
            p++;
        }
        if (p !== r) return false;
        return isPosterOrder(l, midIndex - 1) && isPosterOrder(midIndex, r - 1);
    }
    return isPosterOrder(0, postorder.length - 1);
};



//
const postorder = [1, 3, 2, 6, 5];
console.log(verifyPostorder(postorder));