/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    let dummy = new ListNode();
    dummy.next = head;
    let pre = dummy;
    let cur = dummy.next;
    while (cur) {
        if (cur.val === val) {
            // 找到节点
            pre.next = cur.next;
            cur.next = null;
            return dummy.next;
        }
        pre = pre.next;
        cur = cur.next;
    }
    return dummy.next;
};