/**
 *  手写深拷贝
 * 
 */


 const obj1 = {
    age: 20,
    name: 'xxx',
    address: {
        city: 'beijing'
    },
    arr: ['a', 'b', 'c']
 }
 
 const obj2 = deepClone(obj1)
 obj2.address.city = 'shanghai'
 console.log('obj1.address:',obj1.address)
 console.log('obj2.address:',obj2.address)
 
 
 /**
 * 深拷贝
 * @param {Object} obj 要拷贝的对象
 */
function deepClone(obj = {}) {
    if (typeof obj !== 'object' || obj == null) {
        return obj
    }
    // 初始返回结果
    let result
    if (Array.isArray(obj)) {
        result = []
    } else {
        result = {}
    }

    // 遍历对象或数组（一个个拷贝值）
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            // 保证key不是原型的属性
            result[key] = deepClone(obj[key]) 
        }
    }
    return result
 }
 
 

