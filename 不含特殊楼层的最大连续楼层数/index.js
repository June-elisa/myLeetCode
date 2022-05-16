/**
 *  6064. 不含特殊楼层的最大连续楼层数
 * 
 */

/**
 * @param {number} bottom
 * @param {number} top
 * @param {number[]} special
 * @return {number}
 */
/* var maxConsecutive = function (bottom, top, special) {
    if ((top - bottom + 1 - special.length) == 0) return 0
    let l = bottom
    let r = bottom
    let maxSize = 0
    let specialNum = special.length
    while (r <= top) {
        if (special.includes(r)) {
            specialNum--
            let size = r - l
            maxSize = Math.max(maxSize, size)
            l = r + 1
        } 
        if (!specialNum) {
            r = top
            let size = r - l + 1
            maxSize = Math.max(maxSize, size)
        } 
        
          r++      
    }
        
    return maxSize    
}; */
var maxConsecutive = function (bottom, top, special) {
    // 所有楼层都是特殊楼层
    if ((top - bottom + 1) === special.length) return 0
    // 只有一个特殊楼层
    if (special.length === 1) {
        return Math.max((special[0] - bottom), (top - special[0]))
    }
    // 有多个特殊楼层
    special.sort(function (a, b) { return a - b })
    let maxSize = special[0] - bottom;
    for (let i = 1; i < special.length; i++) {
        maxSize = Math.max(maxSize, special[i] - special[i - 1] - 1)
    }
    maxSize = Math.max(maxSize, top - special[special.length - 1])
    return maxSize

};
const res = maxConsecutive(1958, 999841201, [992755060, 59244544, 727036824, 308076998])
console.log('res:', res)