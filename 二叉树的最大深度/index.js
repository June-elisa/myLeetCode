/**
 *  104. 二叉树的最大深度
 * 给定一个二叉树，找出其最大深度。
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
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
var maxDepth = function (root) {
    if (!root) { return 0 }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};


// 利用深度优先遍历
/* var maxDepth = function (root) {
    let res = 0
    const dfs = (n,l) => {
        if (!n) return
        if (!n.left && !n.right) {
            res = Math.max(res,l)
        }
        dfs(n.left, l + 1)
        dfs(n.right, l + 1)
    }
    dfs(root, 1)
    return res
}; */



const bt = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null,
        left: {
            val: 4,
            left: null,
            right: null,
        },
        right: {
            val: 5,
            left: null,
            right: null,
        },
    },
    right: {
        val: 3,
        left: null,
        right: null,
    },
};

let res = maxDepth(bt)
console.log('res:', res)