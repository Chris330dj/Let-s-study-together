/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
    if(!root) return;
    let head = null;
    let pre = null;

    function reverse(cur) {
        if (!cur) return;
        reverse(cur.left);
        // 中序位置
        if (!head) {
            // 初始化
            head = cur;
            pre = cur;
            cur.left = pre; // 指向null
        } else {
            // 利用中序遍历在二叉搜索树上进行有序移动
            pre.right = cur;
            cur.left = pre;
        }
        pre = cur; // i++
        
        reverse(cur.right);
    }

    reverse(root);
    // 走完一遍二叉树了
    pre.right = head;
    head.left = pre;
    return head;
};

