function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
    return reverse(root);
};

function reverse(root) {
    if (!root) return null;
    let copy = new TreeNode(root.val);
    copy.left = reverse(root.right);
    copy.right = reverse(root.left);
    return copy;
};