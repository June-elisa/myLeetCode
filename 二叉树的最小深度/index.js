/**
 *  111. 二叉树的最小深度
 * 给定一个二叉树，找出其最小深度。
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
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
// 方法1（递归）
/* var minDepth = function (root) {
    if (!root) { return 0 }
    let minLeft = minDepth(root.left) 
    let minRight = minDepth(root.right) 
    return root.left == null || root.right == null ? minLeft + minRight + 1 : Math.min(minLeft, minRight) + 1;    
}; */

// 方法2（利用深度优先遍历）
/* var minDepth = function (root) {
    let res
    const dfs = (n,l) => {
        if (!n) return
        if (!n.left && !n.right) {
            res = res? Math.min(res,l) : l
        }
        dfs(n.left, l + 1)
        dfs(n.right, l + 1)
    }
    dfs(root, 1)
    return res ? res : 0
}; */


// 方法3（利用广度优先遍历）
var minDepth = function (root) {
    if (!root) return 0
    const q = [[root, 1]];
    while (q.length > 0) {
        const [n, level] = q.shift();
        if (!n.left && !n.right) {
            // 遇到第一个叶子节点
            return level
        }
        n.left && q.push([n.left, level + 1])
        n.right && q.push([n.right, level + 1])
    }
};


const bt = {
    val: 1,
    left: {
        val: 2,
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

let res = minDepth(bt)
console.log('res:', res)