/*
 * @Author: Reya
 * @Date: 2022-06-16 20:26:54
 * @LastEditors: Reya
 * @LastEditTime: 2022-06-16 23:58:31
 * @Description: 
 */
// 模拟异步操作，实际可能为发送请求等等
function createPromise(time, value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, time);
    })
}

// 定义异步函数数组
let tasks = [createPromise(3000, "函数 1"), createPromise(1000, "函数 2"), createPromise(5000, "函数 3")];

async function testAsync() {
    console.time();
    console.log('start')

    await Promise.all(tasks.map(async (item) => {
        const res = await item;
        console.info("执行的函数是：",res);
    }));
    // console.log('执行的函数是：',await Promise.all(tasks))

    console.log('end')
    console.timeEnd();
}

testAsync()