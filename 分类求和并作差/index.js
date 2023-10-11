/**
 *  100103. 分类求和并作差
 *
 */

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
// var differenceOfSums = function(n, m) {
//     let sum1 = add(n);
//     let sum2 = m * add(Math.floor(n/m)) 
//     return sum1 - sum2*2;
// };

var add = function(n){
    if(n==1 || n ==0){
        return n;
      }else{
        return add(n-1)+n;
      }
}

// 优化
var differenceOfSums = function(n, m) {
    let sum1 = n * (n + 1)/2;
    //  能够被 m 整除的项数
    const num = Math.floor(n/m);
    const sum2 = m * num * (num + 1) / 2;
    return sum1 - sum2 * 2;
};

const res = differenceOfSums(5,6);
console.log("res:", res);
