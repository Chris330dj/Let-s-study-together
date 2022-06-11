/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
    if (!root) return;
    let res;
    function dfs(node) {
        if (!node) return;
        dfs(node.right);
        k--;
        if (!k) {
            res = node.val;
            return;
        }
        dfs(node.left);
    }
    dfs(root);
    return res;
};

