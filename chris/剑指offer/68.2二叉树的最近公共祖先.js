/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (!root) return null;
    if (root === p || root === q) {
        return root;
    }
    // 此处理解为二叉树的前/后序遍历
    // 根节点没有为null，没有等于pq时，递归左右子树
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    // 出节点时
    // 左右都有,必是pq一左一右
    if (left && right) {
        return root;
    }
    // 只有左边有,去左边
    if (!left) {
        return right;
    }
    if (!right) {
        return left;
    }
    return null;
};