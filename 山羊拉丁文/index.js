
/**
 * 
 *  824. 山羊拉丁文
 */


/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
    let arr = sentence.split(' ');
    const s = arr.length
    let newArr = []
    console.log('arr', arr)
    let newWordList
    for (let i = 0; i < s; i++) {
        newWordList = arr[i].split('')
        if (newWordList[0].toLowerCase() !== 'a' && newWordList[0].toLowerCase() !== 'e' && newWordList[0].toLowerCase() !== 'i' && newWordList[0].toLowerCase() !== 'o' && newWordList[0].toLowerCase() !== 'u') {
            // 辅音开头
            newWordList.push(newWordList.shift())
        }
        newWordList.push('ma')
        newWordList.push(...new Array(newArr.length + 1).fill('a'))
        newArr.push(newWordList.join(''))

    }
    return newArr.join(' ')
};

let res = toGoatLatin('I speak Goat Latin')
console.log('res:', res)


let mySet = new Set()

mySet.add(1)           // Set [ 1 ]
mySet.add(5)           // Set [ 1, 5 ]
mySet.add(5)           // Set [ 1, 5 ]
mySet.add('some text') // Set [ 1, 5, 'some text' ]
console.log('mySet:', mySet)