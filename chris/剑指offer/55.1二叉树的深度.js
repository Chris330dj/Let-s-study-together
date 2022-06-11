/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 递归思路
var maxDepth1 = function (root) {
    let maxDepth = 0;
    let depth = 0;
    function dfs(root) {
        if (!root) return;
        depth++;
        if (depth > maxDepth) maxDepth = depth;
        dfs(root.left);
        dfs(root.right);
        depth--;
    }
    dfs(root);
    return maxDepth;
};

// 迭代思路
var maxDepth = function (root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
