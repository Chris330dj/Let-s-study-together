function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const levelOrder = function (root) {
    // 层序遍历
    const res = [];
    if (root === null) return res;
    const queue = [root];
    while (queue.length > 0) {
        let curTask = queue.shift();
        res.push(curTask.val);
        (curTask.left) && queue.push(curTask.left);
        (curTask.right) && queue.push(curTask.right);
    }
    return res;
}