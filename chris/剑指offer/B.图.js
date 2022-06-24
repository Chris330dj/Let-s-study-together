// 图的遍历
let visited = []; // 记录被遍历过的节点(不走回头路,防止死循环)
let onPath = []; // 记录从起点到当前节点的路径(是否成环)
// graph为邻接表, s为当前节点
function traverse(graph, s) {
    if (visited[s]) return;
    onPath[s] = true;
    // 前序位置
    visited[s] = true;
    for (neighbor of s.neighbors) {
        traverse(graph, neighbor);
    }
    // 后序位置
    onPath[s] = false;
};
