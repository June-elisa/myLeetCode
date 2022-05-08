/**
 *  6056. 字符串中最大的 3 位相同数字
 */

/**
 * @param {string} num
 * @return {string}
 */
// 方法1：双指针
/* var largestGoodInteger = function (num) {
    let p1 = 0;
    let p2 = 1;
    let res = ''
    if (num.length < 3) return res
    let myMap = new Map();
    while (p2 <= num.length) {
        if ((p2 - p1) === 3) {
            if (!myMap.has(num[p1])) {
                myMap.set(num[p1], num.slice(p1, p2))
            }
            p1 = p2
        }
        if (num[p2] && !(num[p1] === num[p2])) {
            p1 = p2
        }
        p2++
    }

    let maxKey = -1
    for (const [key, value] of myMap) {
        if (+key > maxKey) {
            maxKey = +key
            res = value
        }
    }
    return res
}; */


// 方法2：枚举所有符合条件的字符串
var largestGoodInteger = function (num) {
    let res = ''
    if(num.length < 3) return res
    let arr = ['000', '111', '222', '333', '444', '555', '666', '777', '888', '999']
    for (let i = 9; i >= 0; i--){
        if (num.indexOf(arr[i]) !== -1) {
            return arr[i]
        }
    }
    return res
};

let res = largestGoodInteger("5557")
console.log('res:', res)