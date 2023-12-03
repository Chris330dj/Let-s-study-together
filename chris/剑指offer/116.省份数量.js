/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    const n = isConnected.length;
    let unionset = new UnionSet(n);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (isConnected[i][j]) unionset.union(i, j);
        }
    }
    return unionset.size();
};

class UnionSet {
    constructor(n) {
        // 初始化一个有n个节点的并查集
        this.father = new Array(n).fill(1).map((_, i) => i);
        this.rank = new Array(n).fill(1);
    }
    // find 查找p对应的集合
    find(p) {
        while (this.father[p] !== p) {
            this.father[p] = this.father[this.father[p]];
            p = this.father[p];
        }
        return this.father[p];
    }
    // union 合并p和q所在的集合
    union(p, q) {
        let father_p = this.find(p);
        let father_q = this.find(q);
        if (father_p === father_q) return;
        // 将深度小的加到深度大的树下
        if (this.rank[father_p] < this.rank[father_q]) {
            this.father[father_p] = father_q;
            this.rank[father_q]++;
        } else {
            this.father[father_q] = father_p;
            this.rank[father_p]++;
        }
    }
    // isConnected p和q是否在同一集合
    isConnected(p, q) {
        return this.find(p) === this.find(q);
    }
    // size 查询并查集中有多少集合
    size() {
        let res = 0;
        for (let i = 0; i < this.father.length; i++) {
            if (this.father[i] === i) res++;
        }
        return res;
    }
}

// test
const isConnected = [[1,1,0],[1,1,0],[0,0,1]];
console.log(findCircleNum(isConnected));