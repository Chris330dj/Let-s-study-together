// 如果把根节点看作第一层，如何打印出每个节点所在的层数？
function traverse(root, level) {
    if (root === null) return;

    console.log('此处打印', level);
    traverse(root.left, level + 1);
    traverse(root.right, level + 1);
};
traverse(root, 1);

// 打印出每个节点的左右子树各有几个节点？
function count(root) {
    if (root === null) return 0;
    let leftcount = count(root.left);
    let rightcount = count(root.right);
    console.log('左:', leftcount, ' 右:', rightcount);
    return leftcount + rightcount + 1;
};