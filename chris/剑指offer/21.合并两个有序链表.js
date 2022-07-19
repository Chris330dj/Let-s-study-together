/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists1 = function (list1, list2) {
    let dumb = new ListNode();
    let p = dumb;
    while (list1 !== null && list2 !== null) {
        let v1 = list1.val, v2 = list2.val;
        if (v1 <= v2) {
            p.next = list1;
            list1 = list1.next;
        } else {
            p.next = list2;
            list2 = list2.next;
        }
        p = p.next;
    }
    if (list1 !== null) p.next = list1;
    if (list2 !== null) p.next = list2;
    return dumb.next;
};

// 递归实现
var mergeTwoLists = function (list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};