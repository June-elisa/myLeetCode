/**
 *  76. 最小覆盖子串 **
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 * 
 * 备注：难度较高，自己没有做出来，以下为老师的答案
 * 
 */


/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let l = 0;
    let r = 0;
    const need = new Map(); // 存储t需要的字符的个数
    for (let c of t) {
        need.set(c, need.has(c) ? need.get(c) + 1 : 1)
    }
    let needType = need.size  // t的字符种类个数
    let res = ''
    while (r < s.length) {
        const c = s[r]

        if (need.has(c)) {
            // 如果当前字符命中t所需要的字符   
            // 该字符所需个数 - 1
            need.set(c, need.get(c) - 1)
            // 这个字符类型个数凑满了，需要字符类型 - 1
            if (need.get(c) === 0) needType -= 1;
        }

        // 所需字符都凑满了
        while (needType === 0) {
            const newRes = s.substring(l, r + 1)
            // 如果当前字符长度小于之前存储的字符串，存储当前窗口字符
            if (!res || newRes.length < res.length) res = newRes

            // 移动左指针前的准备
            const c2 = s[l]
            if (need.has(c2)) {
                need.set(c2, need.get(c2) + 1)
                if (need.get(c2) === 1) needType += 1
            }
            l += 1
        }
        r += 1
    }
    return res

};

