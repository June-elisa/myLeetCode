/**
 *  65. 有效数字
 * 
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    const graph = {
        0: { 'blank': 0, 'sign': 1, 'digit': 6, '.': 2 },
        1: { 'digit': 6, '.': 2 },
        2: { 'digit': 3 },
        3: { 'digit': 3, 'e': 4 },
        4: { 'digit': 5, 'sign': 7 },
        5: { 'digit': 5 },
        6: { 'digit': 6, '.': 3, 'e': 4 },
        7: { 'digit': 5 }
    }
    let state = 0
    for (c of s.trim()) {
        if (c >= '0' && c <= '9') {
            // c是数字
            c = 'digit'
        } else if (c === ' ') {
            // c是空格
            c = 'blank'
        } else if (c === '+' || c === '-') {
            // c是加减符号
            c = 'sign'
        } else if (c === 'E') {
            // E e
            c = 'e'
        }

        state = graph[state][c]
        if (state === undefined) {
            // 无路可走
            return false
        }
    }
    if (state === 3 || state === 5 || state === 6) {
        return true
    }
    return false

};

const res = isNumber("3.5e+3.5e+3.5")
console.log('res:', res)
