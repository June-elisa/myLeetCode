/**
 *  5242. 兼具大小写的最好英文字母
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
     let bestAlpha = ''
     for (let i = 0; i < s.length; i++) {
         if (s[i] >= 'A' && s[i] <= 'Z') {
             if (s.match(String.fromCharCode( s[i].charCodeAt() + 32)) && (!bestAlpha || bestAlpha < s[i])) {
                 bestAlpha = s[i]
             }
        }
     }
    return bestAlpha
};

const res = greatestLetter("AbCdEfGhIjK")
console.log('res:', res)