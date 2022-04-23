
/**
 * 
 *  206.反转链表
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 * 
 */


const a = { val: 'a' };
const b = { val: 'b' };
const c = { val: 'c' };
const d = { val: 'd' };
a.next = b;
b.next = c;
c.next = d;

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {  
    // 方法一
    let prev = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;

    // 方法二
    // let p1 = head
    // let p2 = null
    // while(p1){
    //     const tmp = p1.next
    //     p1.next = p2
    //     p2 = p1
    //     p1 = tmp
    // }
    // return p2

};
let newList = reverseList(a)
console.log('newList:', newList)