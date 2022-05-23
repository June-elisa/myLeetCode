/**
 *  76. 表示一个折线图的最少线段数
 * 
 */

/**
 * @param {number[][]} stockPrices
 * @return {number}
 */
var minimumLines = function (stockPrices) {  
    if(stockPrices.length === 1) return 0
    if(stockPrices.length === 2) return 1
    // 按照日期升序排序
     stockPrices.sort((a, b) => a[0] - b[0]);
    let linesNumber = 1
    let SUB1 = stockPrices[1][1] - stockPrices[0][1]
    let SUB2 = stockPrices[1][0] - stockPrices[0][0]
    for (let i = 2; i < stockPrices.length; i++){
        let sub1 = (stockPrices[i][1] - stockPrices[i - 1][1])
        let sub2 =  (stockPrices[i][0] - stockPrices[i - 1][0])

        if (BigInt(SUB2)*BigInt(sub1) !== BigInt(SUB1)*BigInt(sub2)) {
            linesNumber++
        }
        SUB1 = sub1
        SUB2 = sub2

    }
    return linesNumber
     
};

//有精度问题 
/* var minimumLines = function(stockPrices) {
    if(stockPrices.length === 1) return 0
    // 按照日期升序排序
    stockPrices.sort((a, b) => a[0] - b[0]);
    let linesNumber = 0
    // 初始化斜率
    let ratio
    for (let i = 1; i < stockPrices.length; i++){
    	// 当前两点间的直线斜率
        let currRatio =BigInt(stockPrices[i][1] - stockPrices[i - 1][1])  / BigInt(stockPrices[i][0] - stockPrices[i - 1][0])
        // 若当前两点间的斜率和之前的斜率不相等，则认为产生新线段
        if (ratio !== currRatio) {
            linesNumber++
            ratio = currRatio
        }
    }
    return linesNumber
}; */

// const res = minimumLines([[1,7],[2,6],[3,5],[4,4],[5,4],[6,3],[7,2],[8,1]])
const res = minimumLines([[1,1],[500000000,499999999],[1000000000,999999998]])
console.log('res:', res)