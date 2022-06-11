function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) return null;
    let map = new Map(); // 一个缓存处,利用map提供指向关系
    let p = head;
    while (p) {
        map.set(p, new Node(p.val));
        p = p.next;
    };
    // 再来一次循环
    p = head;
    while (p) {
        map.get(p).next = map.get(p.next) || null;  // 因为map.get(null)会返回undefined, map里没有存
        map.get(p).random = map.get(p.random) || null;
        p = p.next;
    };
    return map.get(head);
};

var copyRandomList2 = function (head) {
    if (!head) return null;
    let cur = head;
    // 复制节点 A -> A' -> B
    while (cur) {
        // 先建一个无依无靠的节点出来, 再改指向
        let temp = new Node(cur.val);
        temp.next = cur.next;
        cur.next = temp;
        cur = temp.next;
    };
    // 增加A'节点的random指向
    cur = head;
    while (cur) {
        if (cur.random) {
            cur.next.random = cur.random.next;
        }
        cur = cur.next.next;
    };
    // 拆分链表
    cur = head;
    let copy = head.next;
    let res = head.next;
    while (copy.next) {
        cur.next = cur.next.next;
        copy.next = copy.next.next;
        cur = cur.next;
        copy = copy.next;
    };
    cur.next = null; // 处理原链表尾节点
    return res;
};