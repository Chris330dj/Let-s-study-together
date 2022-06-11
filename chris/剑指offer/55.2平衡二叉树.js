/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    let res = true;
    var maxDepth = function (root) {
        if (!root) return 0;
        let depth_l = maxDepth(root.left);
        let depth_r = maxDepth(root.right);
        if(Math.abs(depth_l - depth_r) > 1) res = false;
        return 1 + Math.max(depth_l, depth_r);
    };
    maxDepth(root);
    return res;
};