/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// BFS版本
var canFinish = function (n, preList) {
    // 维护一个入度数组, 入度为0的课可以上
    let inDegree = new Array(n).fill(0);
    // 建立一个邻接表
    // map: key(课号) - value(依赖这门课的后序课[])
    let map = {};
    for (let i = 0; i < preList.length; i++) {
        let cur = preList[i][0];
        let pre = preList[i][1];
        inDegree[cur]++;
        if (map[pre]) {
            map[pre].push(cur);
        } else {
            map[pre] = [cur];
        }
    }
    // 任务队列
    const queue = [];
    for (let i = 0; i < inDegree.length; i++) {
        // 所有入度为0的课进入任务队列
        if (inDegree[i] === 0) queue.push(i);
    }
    let count = 0;
    while (queue.length) {
        let selected = queue.shift(); // 一次选一门课
        count++;
        const toEnQueue = map[selected]; // 后序课
        if (toEnQueue && toEnQueue.length) {
            for (let i = 0; i < toEnQueue.length; i++) {
                let curselected = toEnQueue[i];
                inDegree[curselected]--;
                if (inDegree[curselected] === 0) {
                    // 入度为0, 移入任务队列
                    queue.push(curselected);
                }
            }
        }
    }
    return count === n;
};

// DFS版本
var canFinish2 = function (n, preList) {
    let hasCircle = false;
    let graph = buildGraph(n, preList);
    let visited = new Array(n).fill(false); // 记录遍历过的节点,防止死循环
    let onPath = new Array(n).fill(false); // 记录一次traverse走过的节点,找环
    // 建图
    function buildGraph(n, preList) {
        let graph = new Array(n).fill(0).map(() => new Array());
        for (let edge of preList) {
            let [to, from] = edge;
            graph[from].push(to);
        }
        return graph;
    }
    // 遍历
    function traverse(graph, s) {
        if (onPath[s]) hasCircle = true;
        if (visited[s] || hasCircle) return;
        // 前
        visited[s] = true;
        onPath[s] = true;
        for (let t of graph[s]) {
            traverse(graph, t);
        }
        // 后
        onPath[s] = false;
    }
    for (let i = 0; i < n; i++) {
        traverse(graph, i);
    }
    return !hasCircle;
}


// test
const numCourses = 2, prerequisites = [[1, 0], [0, 1]];
console.log(canFinish2(numCourses, prerequisites));