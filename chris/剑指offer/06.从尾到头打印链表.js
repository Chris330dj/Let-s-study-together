function ListNode(val) {
    this.val = val;
    this.next = null;
};

/**
 * @param {ListNode} head
 * @return {number[]}
 */
const reversePrint = function (head) {
    if (!head || head.val === null) return [];
    let p = head;
    let res = [];
    while (p.next !== null) { // 改成 while(head!==null)会省一行unshift
        res.unshift(p.val);
        p = p.next;
    }
    res.unshift(p.val);
    return res;
};

// 利用函数递归栈的特性
const reversePrint2 = function (head, arr = []) {
    if (head !== null) {
        if (head.next !== null) {
            reversePrint2(head.next, arr);
        }
        arr.push(head.val);
    }
    return arr;
};
