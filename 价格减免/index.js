/**
 *  6079. 价格减免
 * 
 */

/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
var discountPrices = function (sentence, discount) {
    const arr = sentence.split(" ")
    let newArr = arr.map(item => {
        if (item[0] === '$' && item.length > 1 && !isNaN(parseFloat(item.substring(1))) &&isFinite(item.substring(1)) ) {
            let price = item.substring(1)
            price = (price *(1- discount/100)).toFixed(2)
            return '$'+price
        }
        return item
    })
    return newArr.join(' ')

};
const res = discountPrices("ka3caz4837h6ada4 r1 $602", 9)
console.log('res:', res)