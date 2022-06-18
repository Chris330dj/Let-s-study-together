/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    if (n < 4) return n - 1;
    let m3 = Math.floor(n / 3);
    let res = 1;
    let remainder = n % 3;
    if (remainder === 1) {
        m3--;
        res = 4;
    }
    if (remainder === 2) {
        res = 2;
    }
    const MOD = 1000000007;
    // 重写pow函数
    const pow = (basic, exp) => {
        let temp = 1;
        while (exp > 0) {
            if (temp * basic > MOD) {
                temp = temp * basic % MOD;
            } else {
                temp = temp * basic;
            }
            exp--;
        }
        return temp;
    }
    //
    return (res * pow(3, m3)) % MOD;
};

console.log(cuttingRope(120));