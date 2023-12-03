/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let fast = head, slow = head;
    while (fast) {
        if (!fast.next || !fast.next.next) return false;
        fast = fast.next.next;
        slow = slow.next;
        if (fast.val === slow.val) return true;
    }
    return false;
};