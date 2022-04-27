
/**
 * 
 *  349. 两个数组的交集
 * 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
 * 
 */


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    return [...new Set(nums1.filter(item => nums2.includes(item)))]
};

let res = intersection([1, 2, 3, 1], [2, 2])
console.log(res)

