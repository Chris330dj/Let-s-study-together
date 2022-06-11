function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
    if (!A || !B) return false;
    // 遍历A
    return reverse(A, B);
};

function reverse(root, B) {
    // 本轮需要考虑的事: 以root为起点能否匹配上B
    if (!root || !B) return false;
    if (compare(root, B)) return true;
    // 递归考虑的事: root不行试试子树，有相同的就行
    return reverse(root.left, B) || reverse(root.right, B);
}

function compare(rootA, rootB) {
    // 本轮需要考虑的事: 当前节点能否匹配上
    if (!rootB) return true; // 中=null的话说明这条路走到头了，而且之前也没有返回false
    if (!rootA) return false;
    if (rootA.val !== rootB.val) return false;
    // 递归考虑的事: 左右子树都要匹配上
    return compare(rootA.left, rootB.left) && compare(rootA.right, rootB.right);
}