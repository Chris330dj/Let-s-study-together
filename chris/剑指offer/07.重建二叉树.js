/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;
    let root = new TreeNode(preorder[0]);
    let p = inorder.indexOf(preorder[0]);
    let inorder_left = inorder.slice(0, p);
    let inorder_right = inorder.slice(p + 1);
    let preorder_left = preorder.slice(1, p + 1);
    let preorder_right = preorder.slice(p + 1);
    if (p !== 0) root.left = buildTree(preorder_left, inorder_left);
    if (p !== preorder.length - 1) root.right = buildTree(preorder_right, inorder_right);
    return root;
};