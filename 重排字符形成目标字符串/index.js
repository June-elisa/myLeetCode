/**
 *  6078. 重排字符形成目标字符串
 * 
 */

/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
    const tMap = new Map()

    for (let val of target) {
        if (tMap.has(val)) {
            tMap.set(val,tMap.get(val)+1)
        } else {
            tMap.set(val,1)
        }
    }

    const sMap = new Map()
    for (let val of s) {
        if (sMap.has(val)) {
            sMap.set(val,sMap.get(val)+1)
        } else {
            sMap.set(val,1)
        }
    }
    


    let n
    for (const [i, value] of tMap) {
        let curr = Math.floor(sMap.get(i) / value) 
        if (!curr || curr < 1) {
            return 0
        }
        if (!n) {
            n = curr
        }
        n = Math.min(n,curr)
    }
    
    return n?n:0
    
};

const res = rearrangeCharacters("wvu", "tu")
console.log('res:', res)