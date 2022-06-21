/**
 *  6099. 小于等于 K 的最长二进制子序列
 * 
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var longestSubsequence = function(s, k) {
    let result = '';
    for(let i = s.length - 1; i >= 0; i--){
        if(parseInt((s[i] + result),2) <= k){
            result = s[i] + result;
        }
    }
    return result.length;
};


const res = longestSubsequence("1001010", 5)
console.log('res:', res)