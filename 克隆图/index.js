/**
 *  133. 克隆图
 * 
 */

// Definition for a Node.
function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};


/**
 * @param {Node} node
 * @return {Node}
 */
// 深度优先遍历
/*  var cloneGraph = function (node) {
    if (!node) return;
    const visited = new Map()
    const dfs = (n) => {
        // 生成克隆节点
        const nCopy = new Node(n.val)
        // 存储克隆节点和原节点的映射关系
        visited.set(n, nCopy);  
        n.neighbors.forEach(ne => {
            if (!visited.has(ne)) {
                dfs(ne)
            }
            // 克隆边
            nCopy.neighbors.push(visited.get(ne))
        })
    }
    dfs(node)
    return visited.get(node)
};
 */

// 广度优先遍历
var cloneGraph = function (node) {
    if (!node) return;
    const visited = new Map();
    visited.set(node,new Node(node.val));
    const q = [node]; 
    while (q.length) {
        const n = q.shift();
        n.neighbors.forEach(ne => {
            if (!visited.has(ne)) {
                q.push(ne);
                visited.set(ne,new Node(ne.val));
            }
            visited.get(n).neighbors.push(visited.get(ne))
        });
    }
    return visited.get(node)
};
