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
 * @return {TreeNode}
 */
var bstToGst = function (root) {
  // 逆向中序遍历 右中左
  let sum = 0;
  let node = root;
  const stack = [];
  while (stack.length !== 0 || node !== null) {
    while (node !== null) {
      stack.push(node);
      // 右
      node = node.right;
    }
    if (stack.length) {
      // 中
      node = stack.pop();
      node.val += sum;
      sum = node.val;
      // 左
      node = node.left;
    }
  }
  return root;
};

const root = [4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8];
console.log(bstToGst(root));


