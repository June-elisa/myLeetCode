/**
 *  417. 太平洋大西洋水流问题c
 * 
 */

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    if (!heights || !heights[0]) { return []; }
    const m = heights.length
    const n = heights[0].length
    const flow1 = Array.from({ length: m }, () => new Array(n).fill(false))
    const flow2 = Array.from({ length: m }, () => new Array(n).fill(false))

    // r:row, c:column
    const dfs = (r, c, flow) => {
        flow[r][c] = true
        const nextArr = [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]]
        nextArr.forEach(([nr, nc]) => {
            if (
                // 保证在矩阵中
                nr >= 0 && nr < m &&
                nc >= 0 && nc < n &&
                // 防止死循环
                !flow[nr][nc] &&
                // 保证逆流而上
                heights[nr][nc] >= heights[r][c]
            ) {
                dfs(nr, nc, flow)
            }
        })
    }

    // 沿着四条海岸线逆流而上
    for (let r = 0; r < m; r++) {
        dfs(r, 0, flow1)
        dfs(r, n - 1, flow2)
    }
    for (let c = 0; c < n; c++) {
        dfs(0, c, flow1)
        dfs(m - 1, c, flow2)
    }

    // 收集能流到两个大洋里的坐标
    const res = []
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (flow1[r][c] && flow2[r][c]) {
                res.push([r, c])
            }
        }
    }
    return res;

};
const res = pacificAtlantic([[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]])
console.log('res:', res)
