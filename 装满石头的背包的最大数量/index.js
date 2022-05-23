/**
 *  6075. 装满石头的背包的最大数量
 * 
 */

/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
 var maximumBags = function (capacity, rocks, additionalRocks) {
    // 每个背包的剩余容量
    let remainCapacity = capacity.map((val, idx) => (val - rocks[idx]))
    // 升序排序
    remainCapacity.sort((a, b) => a - b)
    for (var i = 0; i < remainCapacity.length; i++){
        additionalRocks = additionalRocks - remainCapacity[i]
        if (additionalRocks == 0) {
        	// 石头正好用完
            return i+1
        }
        if (additionalRocks < 0) {
        	// 石头不够用
            return i
        }
    }
    return i
};


const res = maximumBags( [2,3,4,5],[1,2,4,4],2)
console.log('res:', res)