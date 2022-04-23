
/**
 * 
 *  83. 删除排序链表中的重复元素  remove-duplicates-from-sorted-list
 * 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
 * 
 */


const a = { val: 1 };
const b = { val: 1 };
const c = { val: 2 };
const d = { val: 3 };
const e = { val: 3 };

a.next = b;
b.next = c;


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
var deleteDuplicates = function (head) {
    let p = head
    while (p.next) {
        while (p.next && p.val === p.next.val) {
            p.next = p.next.next
        }
        p = p.next         
    }
    return head
};


let newList = deleteDuplicates(a)
console.log('newList:', newList)