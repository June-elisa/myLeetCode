/**
 *  5218. 个位数字为 K 的整数之和
 * 
 */
/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var minimumNumbers = function (num, k) {
    if (num === 0) return 0
    if(num % 10 === k) return 1
    if (k === 0) return -1
    

    let res = -1
    const maxLength = Math.floor(num / k)
    for (let i = 1; i <= maxLength; i++){
        if ((k * i) % 10 === num % 10) {
             return i
         }
         
    }
    return res
    
};

const res = minimumNumbers(10,0)
console.log('res:', res)