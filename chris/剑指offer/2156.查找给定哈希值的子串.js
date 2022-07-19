// 加法取模
// (A + B) % mod = ((A % mod) + (B % mod)) % mod
// 乘法取模
// (A * B) % mod = ((A % mod) * (B % mod)) % mod
// 减法取模
// (A - B) % mod =((A % mod) - (B % mod) +mod) % mod
// 除法取模
// 较复杂，暂不记


/**
 * @param {string} s
 * @param {number} power
 * @param {number} modulo
 * @param {number} k
 * @param {number} hashValue
 * @return {string}
 */
var subStrHash = function (s, power, modulo, k, hashValue) {
    const len = s.length, MOD = BigInt(modulo); // 数组长度 模
    power = BigInt(power);
    const val = (s) => {
        if (!s) return BigInt(0);
        return BigInt(s.charCodeAt(0) - 'a'.charCodeAt(0) + 1);
    }
    let hash = 0n, pk = 1n; // 子串哈希值 权值
    let left = len; // 子串最左位置
    for (let i = 0; i < k - 1; i++) {
        pk = pk * power % MOD;
    }
    for (let i = len - 1; i >= 0; i--) {
        hash = (hash * power + val(s[i])) % MOD;
        if (i <= len - k) {
            if (hash % MOD === BigInt(hashValue)) {
                left = i;
            }
            // 所有要做减法求模的行为要小心结果为负数，我们减法之前先加上 mod，保证结果为正。
            hash = (hash - pk * val(s[i + k - 1]) % MOD + MOD) % MOD;
        }
    }
    return s.slice(left, left + k);
};

// test
let s = "fbxzaad", power = 31, modulo = 100, k = 3, hashValue = 32;
console.log(subStrHash(s, power, modulo, k, hashValue));