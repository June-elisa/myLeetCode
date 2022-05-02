/**
 *  94. 二叉树的中序遍历
 * 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
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
 * @return {number[]}
 */
// 1、递归算法
/* var inorderTraversal = function (root) {
    if (!root) return []
    let res = []
    const inorder = (root) => {
        if (!root) { return; }
        inorder(root.left);
        res.push(root.val)
        inorder(root.right);
    };   
    inorder(root)
    return res

}; */


// 2、迭代算法
var inorderTraversal = function (root) {
    if (!root) return [];
    let res = []
    const stack = [];
    let p = root;
    while (stack.length || p) {
        // 左子树都推入栈
        while (p) {
            stack.push(p)
            p = p.left
        }
        // 弹出最尽头的左子树
        let n = stack.pop()
        res.push(n.val)
        // 访问右子树
        p = n.right
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

let res = inorderTraversal(bt)
console.log('res:', res)