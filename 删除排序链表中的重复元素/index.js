
/**
 * 
 *  83. 删除排序链表中的重复元素  remove-duplicates-from-sorted-list
 * 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
 * 
 */


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let p = head

    while (p.next) {
        // 只有当前节点的值和下个节点的值不相同，才移动指针
        if (p.val === p.next.val) {
            p.next = p.next.next
        } else {
            p = p.next
        }        
        // while (p.next && p.val === p.next.val) {
        //     p.next = p.next.next
        // }
        // p = p.next         
    }
    return head
};
