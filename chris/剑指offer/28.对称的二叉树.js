function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) return true;
    return compare(root.left, root.right);
};

function compare(A, B) {
    if (!A && !B) return true;
    if (!A || !B) return false;
    if (A.val !== B.val) return false;
    return compare(A.left, B.right) && compare(A.right, B.left);
}