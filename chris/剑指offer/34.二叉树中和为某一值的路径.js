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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
    if (!root) return [];
    let res = [];
    function reverse(root, sum, path) {
        if (!root) return;
        //前序遍历
        path.push(root.val);
        sum += root.val;
        if (!root.left && !root.right && sum === target) {
            res.push(path.slice());
        }
        if (root.left) {
            reverse(root.left, sum, path);
        }
        if (root.right) {
            reverse(root.right, sum, path);
        }
        path.pop();
        sum -= root.val;
    }
    reverse(root, 0, []);
    return res;
};

