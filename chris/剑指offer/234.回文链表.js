/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 复制链表到数组，再用双指针法判断
var isPalindrome1 = function (head) {
    let pR = head;
    let stack = [];
    while (pR) {
        stack.push(pR.val);
        pR = pR.next;
    }
    while (stack.length > 1) {
        if (stack[0] === stack[stack.length - 1]) {
            stack.shift();
            stack.pop();
        } else {
            return false;
        }
    }
    return true;
};

// 递归
var isPalindrome2 = function (head) {
    let pL = head;
    let res = true;
    function reverse(pR) {
        if (!pR) return;
        reverse(pR.next);
        // 从后往前
        if (pR.val !== pL.val) {
            res = false;
        }
        pL = pL.next;
    }
    reverse(head);
    return res;
};

// 快慢指针
var isPalindrome3 = function (head) {
    let p_fast = head.next;
    let p_slow = head;
    while (p_fast && p_fast.next) {
        p_slow = p_slow.next;
        p_fast = p_fast.next.next;
    }
    // 此时p_slow在链表中间
    let back = reverseList(p_slow.next);
    while (back) {
        if (back.val !== head.val) return false;
        back = back.next;
        head = head.next;
    }
    return true;
};

function reverseList(head) {
    if (!head || !head.next) return head;
    let pre = null;
    let cur = head;
    let next;
    while (cur) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}
