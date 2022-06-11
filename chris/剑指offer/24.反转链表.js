/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if(head === null) return head;
    let pre = head;
    let cur = pre && pre.next;
    let next = cur && cur.next;
    pre.next = null;
    while(cur !== null){
        cur.next = pre;
        pre = cur;
        cur = next;
        next = next && next.next;
    }
    return pre;
};

// 可以利用ES6语法，将上述简写为
var reverseList2 = function (head) {
    // 先创造一个dummy会少写一点代码
    let [pre, cur] = [null, head];
    while(cur){
        [cur.next, pre, cur] = [pre, cur, cur.next];
    }
    return pre;
};