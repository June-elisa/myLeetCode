/**
 *  102. 叉树的层序遍历
 * 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []
    const q = [[root, 0]];
    let res = []
    while (q.length > 0) {
        const [n, level] = q.shift();
        if (res[level]) {
            res[level].push(n.val)
        } else {
            res.push([n.val])
        }

        n.left && q.push([n.left, level + 1])
        n.right && q.push([n.right, level + 1])
    }
    return res
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

let res = levelOrder(bt)
console.log('res:', res)