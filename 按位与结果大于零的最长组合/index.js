/**
 *  6065. 按位与结果大于零的最长组合
 * 
 */

/**
 * @param {number[]} candidates
 * @return {number}
 */
// 方法1：排序后，整数转二进制，双重for循环
/* var largestCombination = function (candidates) {
    candidates.sort((a, b) => b - a)
    let bCandidates = candidates.map(item => item.toString(2))
    const iLength = bCandidates[0].length
    let res = 0, sum;
    for (let i = 0; i < iLength; i++) {
        sum = 0;
        for (let j = 0; j < bCandidates.length; j++) {
            let str = bCandidates[j]
            let strLength = str.length
            if (str[strLength - i - 1] === '1') {
                sum++
            } else if (str[strLength - i - 1] === undefined) {
                break
            }
        }
        res = Math.max(res, sum)
    }
    return res
}; */

// 方法2：进阶版，& <<
var largestCombination = function (candidates) {
    let res = 0, sum;
    for (let i = 0; i < 32; i++) {
        sum = 0;
        for (let j = 0; j < candidates.length; j++) {
            if (candidates[j] & (1 << i)) {
                // candidate[i] 的第 i 位是 1
                sum++;
            }
        }
        res = Math.max(res, sum)
    }
    return res;
};

const res = largestCombination([16, 17, 71, 62, 12, 24, 14])
console.log('res:', res)