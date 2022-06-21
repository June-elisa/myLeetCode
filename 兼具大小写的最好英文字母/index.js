/**
 *  5242. 兼具大小写的最好英文字母
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
     let res = ''
     for (let i = 0; i < s.length; i++) {
         if (s[i] >= 'A' && s[i] <= 'Z') {
            //  小写的ASCII
             const lowerNum =  s[i].charCodeAt() + 32
            //  小写字符
             const lowerAlphabet = String.fromCharCode(lowerNum)
             if (s.indexOf(lowerAlphabet) !== -1 && (!res || res < s[i])) {
                 res = s[i]
             }
        }
     }
    return res
};

const res = greatestLetter("AbCdEfGhIjK")
console.log('res:', res)