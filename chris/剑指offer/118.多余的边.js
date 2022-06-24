/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    let n = edges.length;
    let unionset = new UnionSet(n);
    console.log(unionset)
    for (let edge of edges) {
        if (unionset.isConnected(...edge)) {
            return edge;
        } else {
            unionset.union(...edge);
        }
    }
};

class UnionSet {
    constructor(n) {
        this.father = new Array(n + 1).fill(0).map((_, i) => { return i });
        this.root = new Array(n + 1).fill(1);
    }
    getFather(p) {
        while (this.father[p] !== p) {
            this.father[p] = this.father[this.father[p]];
            p = this.father[p];
        }
        return p;
    }
    union(p, q) {
        let father_p = this.getFather(p);
        let father_q = this.getFather(q);
        if (father_p === father_q) return;
        if (this.root[father_p] < this.root[father_q]) {
            this.father[father_p] = father_q;
            this.root[father_q]++;
        } else {
            this.father[father_q] = father_p;
            this.root[father_p]++;
        }
    }
    isConnected(p, q) {
        return this.getFather(p) === this.getFather(q);
    }
}

//test
const edges = [[1,2],[1,3],[2,3]];
console.log(findRedundantConnection(edges));