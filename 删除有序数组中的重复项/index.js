/**
 *  26. 删除有序数组中的重复项
 * 
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 0
    while (nums[i + 1] !== undefined) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1)
        } else {
            i++
        }
    }

    return nums.length
};


/**
 * @description 快慢指针
 */
/* var removeDuplicates = function (nums) {
    // 判断边界
    if (nums && nums.length < 0) {
        return 0
    }
    var low = 0, fast = 1, n = nums.length;
    while (fast < n) {
        if (nums[fast] !== nums[low]) {
            nums[low + 1] = nums[fast]
            low++
        }
        fast++
    }
    return low + 1
}; */


let res = removeDuplicates([1, 1, 2])
console.log('res：',res)