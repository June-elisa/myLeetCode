/**
 *  6253. 回环句
 * 
 */


/**
 * @param {string} sentence
 * @return {boolean}
 */
 var isCircularSentence = function(sentence) {
    let wordList = sentence.split(' ');
    let isCircular = true;
    let lastWordChar = wordList.reduce((preLastChar,curWord,curIndex) => {
        // 比较当前word的第一个字符和前一个word的最后一个字符是否相等
        if((preLastChar !== curWord.charAt(0) && curIndex)) isCircular = false;
        // 返回当前word的最后一个字符
        return curWord.charAt(curWord.length-1);
    },'')
    if(wordList[0].charAt(0) !== lastWordChar)return false;
    return isCircular;
};

let sentence = "Leetcode is cool";
let res = isCircularSentence(sentence);
console.log('res:',res);
