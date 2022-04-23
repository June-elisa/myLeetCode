
/**
 * 
 *  2. 两数相加
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 */


const a1 = { val: 2 };
const b1 = { val: 4 };
const c1 = { val: 9 };

a1.next = b1;
b1.next = c1;


const a2 = { val: 5 };
const b2 = { val: 6 };
const c2 = { val: 4 };
const d2 = { val: 9 };

a2.next = b2;
b2.next = c2;
c2.next = d2;


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const l3 = new ListNode(0)
    let p1 = l1
    let p2 = l2
    let p3 = l3
    let carry = 0
    while (p1 || p2) {
        let val1 = p1 ? p1.val : 0;
        let val2 = p2 ? p2.val : 0;
        let sum = val1 + val2 + carry
        carry = Math.floor(sum / 10)
        p3.next = new ListNode(sum % 10)
        if (p1) p1 = p1.next
        if (p2) p2 = p2.next
        p3 = p3.next
    }
    if (carry) {
        p3.next = new ListNode(carry)
    }
    return l3.next

};



 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }




let newList = addTwoNumbers(a1,a2)
console.log('newList:', newList)