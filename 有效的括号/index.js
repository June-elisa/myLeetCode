
/**
 * 
 *  20. 有效的括号:
 
    给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
    有效字符串需满足：
    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。

    示例 1：
    输入：s = "()"
    输出：true

    示例 2：
    输入：s = "([)]"
    输出：false
 */


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const n = s.length
    if (n % 2 === 1) {
        return false;
    }
    let arr = []
    const object = {
        ')': '(',
        '}': '{',
        ']': '[',
    }

    for (let i = 0; i < n; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            arr.push(s[i])
        } else {
            if (!arr.length) {
                return false
            }
            if (object[s[i]] != arr.pop()) {
                return false
            }
        }

    }

    return !arr.length

};

console.log('isValid:', isValid('()[]{}'))