/*
 * @lc app=leetcode.cn id=2477 lang=javascript
 *
 * [2477] 到达首都的最少油耗
 */

// @lc code=start
/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function(roads, seats) {
    // 用二维数组记录每个点的邻居
    const g = Array(roads.length + 1).fill(null).map(() => [])
    for(const [x, y] of roads){
        g[x].push(y)
        g[y].push(x)
    }
    // 深度搜索 + 计算每个节点的值
    let res = 0;
    function dfs(cur, fa){
        let sum = 1;
        for(let y of g[cur]){
            if(y !== fa){
                let count = dfs(y, cur)
                sum += count
                res += Math.ceil(count / seats)
                // res += Math.floor((count + seats - 1)/ seats)
            }
        }
        return sum
    }

    // 开始dfs
    dfs(0, -1)
    return res

};
// @lc code=end
const roads = [[3,1],[3,2],[1,0],[0,4],[0,5],[4,6]];
const seats = 2
console.log(minimumFuelCost(roads, seats))
