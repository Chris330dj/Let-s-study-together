/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  if (!cardPoints.length || !k) return 0;
  let r = 0; // 右边有r个
  let l = k; // 左边有l个
  let max_sum = 0;
  let r_sum = 0; // 右边的总和
  let l_sum = 0; // 左边的总和
  // 先计算l_sum
  for (let i = 0; i < k; i++) {
    r_sum += cardPoints[i];
  }
  max_sum = r_sum;

  for (let r = 1; r <= k; r++) {
    l_sum -= cardPoints[l - 1];
    l--;
    r_sum += cardPoints[cardPoints.length - r];
    let new_sum = l_sum + r_sum;
    if (new_sum > max_sum) {
      max_sum = new_sum;
    }
  }
  return max_sum;
};

const cardPoints = [1, 2, 3, 4, 5, 6, 1];
const k = 3;

console.log(maxScore(cardPoints, k));
