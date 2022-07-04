
/**
 * 
 *  221. 合并两个有序链表
 * 
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// 链表a
const a1 = new ListNode(1)
const a2 = new ListNode(2)
const a3 = new ListNode(4)
a1.next = a2
a2.next = a3

// 链表b
const b1 = new ListNode(1)
const b2 = new ListNode(3)
const b3 = new ListNode(4)
b1.next = b2
b2.next = b3


/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    const list3 = new ListNode(0)
    let p1 = list1
    let p2 = list2
    let p3 = list3
    while (p1 || p2) {
        if (!p1) {
            p3.next = p1
            break
        }
        if (!p2) {
            p3.next = p2
        }


        if (p1.val < p2.val) {
            p3.next = new ListNode(p1.val)
        }
    }

};

let newList = mergeTwoLists(a1,b1)
console.log('newList:', newList)