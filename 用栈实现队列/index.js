
/**
 * 
 *  232. 用栈实现队列:--  待解决
 */


var MyQueue = function () {
    // this.queue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    // this.queue.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    // return this.queue.shift()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    // return this.queue[0]
}; 

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    // return !this.queue.length
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */


var myQueue = new MyQueue();
var param_1 = myQueue.push(1); // queue is: [1]
var param_2 =myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
var param_3 =myQueue.peek(); // return 1
var param_4 =myQueue.pop(); // return 1, queue is [2]
var param_5 =myQueue.empty(); // return false
 
console.log(param_1, param_2, param_3, param_4, param_5)