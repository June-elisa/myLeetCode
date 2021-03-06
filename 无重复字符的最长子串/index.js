/**
 *  3. 无重复字符的最长子串
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 */


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let map = new Map()
    let l = 0
    let res = 0
    for (let r = 0; r < s.length; r++){       
        if (map.has(s[r]) && map.get(s[r])>= l) {
            l = map.get(s[r]) + 1
        }
        res = Math.max(res, r - l + 1)
        map.set(s[r],r)
    }
    return res

};

let res = lengthOfLongestSubstring('abba')
console.log('res:',res)