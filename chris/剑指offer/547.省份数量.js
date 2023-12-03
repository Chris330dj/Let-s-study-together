/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    // 用临接矩阵维护一个并查集
    let n = isConnected.length;
    let unionSet = new UnionSet(n);
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            isConnected[i][j] && unionSet.join(i, j);
        }
    }
    return unionSet.getSize();
};

class UnionSet {
    constructor(n) {
        this.father = new Array(n).fill(0).map((_, i) => i);
        this.depth = new Array(n).fill(1);
    }
    join(p1, p2) {
        let p1_father = this.findFather(p1);
        let p2_father = this.findFather(p2);
        if (p1_father === p2_father) return;
        if (this.depth[p1_father] > this.depth[p2_father]) {
            this.father[p2_father] = p1_father;
            this.depth[p1_father]++;
        } else {
            this.father[p1_father] = p2_father;
            this.depth[p2_father]++;
        }
    }
    findFather(p1) {
        while (this.father[p1] !== p1) {
            this.father[p1] = this.father[this.father[p1]];
            p1 = this.father[p1];
        }
        return this.father[p1];
    }
    getSize() {
        let count = 0;
        this.father.forEach((val, i) => {
            if (val === i) {
                count++;
            }
        })
        return count
    }
}



// test

const isConnected = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
console.log(findCircleNum(isConnected));
