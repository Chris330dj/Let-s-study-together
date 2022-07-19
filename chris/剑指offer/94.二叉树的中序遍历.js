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
 * @return {number[]}
 */

// 递归方法
var inorderTraversal1 = function (root) {
    let res = [];
    function _inorder(root) {
        if (!root) {
            // res.push(null);
            return;
        }
        _inorder(root.left);
        res.push(root.val);
        _inorder(root.right);
    }
    _inorder(root);
    return res;
};

// 迭代方法
var inorderTraversal = function (root) {
    let stack = [];
    let res = [];
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
}
