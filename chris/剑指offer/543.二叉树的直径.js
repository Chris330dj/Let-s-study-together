/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    // 左子树最深 + 右子树最深
    if (!root) return 0;
    let maxDepth = 0;
    function getMaxDepth(root) {
        if (!root) return 0;
        let leftDepth = getMaxDepth(root.left);
        let rightDepth = getMaxDepth(root.right);
        maxDepth = Math.max(leftDepth + rightDepth, maxDepth);
        return Math.max(leftDepth, rightDepth) + 1;
    }
    getMaxDepth(root);
    return maxDepth;
};



