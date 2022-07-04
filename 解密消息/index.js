/**
 *  6108. 解密消息
 */


/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
    let keySet = new Set(key.split(''))
    keySet.delete(' ')
    const keyArr = [...keySet]  

    let realMessage = []
    for (let i = 0; i < message.length; i++) {        
        if (message[i] === ' ') {
            realMessage.push(' ')
        } else {
            const realAlphabet = String.fromCharCode(keyArr.indexOf(message[i]) + 'a'.charCodeAt())
            realMessage.push(realAlphabet)
        }
    }
    return realMessage.join('')
 };

const res = decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv")
console.log('res:',res)



