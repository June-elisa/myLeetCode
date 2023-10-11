/**
 *  100085. 最小处理时间
 *
 */

/**
 * @param {number[]} processorTime
 * @param {number[]} tasks
 * @return {number}
 */
var minProcessingTime = function(processorTime, tasks) {
  // 升序
  processorTime.sort((a,b) => a -b);
  // 降序
  tasks.sort((a,b) => b-a);
  let res = 0;
  processorTime.forEach((val,i) => {
    let needTime = val + tasks[i*4];
    // if(needTime > res){
    //   res = needTime;
    // }
    res = Math.max(res,needTime)
  })
  return res;
};

const processorTime = [10,20];
const tasks = [2,3,1,2,5,8,4,3];
const res = minProcessingTime(processorTime, tasks);
console.log("res:", res);
