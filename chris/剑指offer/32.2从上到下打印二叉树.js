/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const res = [];
    if (root === null) return res;
    let queque = [root];
    while (queque.length > 0) {
        let subQ = [];
        let subRes = [];
        for (let i = 0; i < queque.length; i++) {
            let curTask = queque[i];
            subRes.push(curTask.val);
            (curTask.left) && subQ.push(curTask.left);
            (curTask.right) && subQ.push(curTask.right);
        }
        queque = subQ;
        res.push(subRes);
    }
    return res;
};