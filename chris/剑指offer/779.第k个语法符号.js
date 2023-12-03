/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
    if (n === 1 && k === 1) return 0;
    let flag = 0; // 逆位数量
    while (n > 1) {
        if ((k % 2) === 0) flag++;
        k = Math.ceil(k / 2);
        n--;
    }
    return (flag % 2);
};

function kthGrammar1(n, k) {
    if (n === 1) return 0;
    const last = kthGrammar(n - 1, (k + 1) >> 1);
    return last === 0 ? (k % 2 === 0 ? 1 : 0) : k % 2 === 0 ? 0 : 1;
}


//
console.log(kthGrammar(3, 1));