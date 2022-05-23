/**
 *  6074. 字母在字符串中的百分比
 * 
 */

/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
 var percentageLetter = function(s, letter) {
     let length = s.length
     let n = 0;
     for (let i = 0; i < length; i++) {
         if (s[i] === letter) {
             n++
         }
     }
     return Math.floor(n / length*100)
};

const res = percentageLetter( "jjjj","k")
console.log('res:', res)