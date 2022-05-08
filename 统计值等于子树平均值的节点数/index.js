/**
 *  6057. 统计值等于子树平均值的节点数
 * 
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var averageOfSubtree = function (root) {
    if (!root) return 0
    let res = 0
    const dfs = (n) => {
        if (!n) { return; }
        let arr1 = n.left?dfs(n.left): [0,0];
        let arr2 = n.right?dfs(n.right): [0,0];       
        let sum = arr1[0] + arr2[0]+n.val
        let num = arr1[1] + arr2[1]+1
        if(Math.floor(sum/num) === n.val) res++
        return [sum,num]
    };
    dfs(root)
    return res
};




const bt = {
    val: 4,
    left: {
        val: 8,
        left: {
            val: 0,
            left: null,
            right: null,
        },
        right: {
            val: 1,
            left: null,
            right: null,
        },
    },
    right: {
        val: 5,
        left: null,
        right: {
            val: 6,
            left: null,
            right:null
        },
    },
};

let res = averageOfSubtree(bt)
console.log('res:', res)