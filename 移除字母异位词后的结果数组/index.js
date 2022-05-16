/**
 *  5234. 移除字母异位词后的结果数组
 * 
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
    if (words.length < 2) return words
    let res = [words[0]]
    for (let i = 1; i < words.length; i++) {
        if (!isMatch(words[i - 1], words[i])) {
            res.push(words[i])
        }
    }
    return res
};

// 判断是否为字母异位词
let isMatch = function (str1, str2) {
    if (str1.length !== str2.length) return false
    // 统计str1中每个字符出现的次数
    const m = new Map();
    for (let i = 0; i < str1.length; i++) {
        if (m.get(str1[i])) {
            m.set(str1[i], m.get(str1[i]) + 1)
        } else {
            m.set(str1[i], 1)
        }
    }
    // str2对比
    for (let j = 0; j < str2.length; j++) {
        if (m.get(str2[j])) {
            m.set(str2[j], m.get(str2[j]) - 1)
        } else {
            return false
        }
    }
    return true
}


const res = removeAnagrams(["abba", "baba", "bbaa", "cd", "cd"])
console.log('res:',res)