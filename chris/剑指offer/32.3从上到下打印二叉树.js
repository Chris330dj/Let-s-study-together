var levelOrder = function (root) {
    const res = [];
    if (root === null) return res;
    let queque = [root];
    let isOrder = true;
    while (queque.length > 0) {
        let subQ = [];
        let subRes = [];
        for (let i = 0; i < queque.length; i++) {
            let cur = queque[i];
            if(isOrder){
                subRes.push(cur.val);
            }else{
                subRes.unshift(cur.val);
            }
            (cur.left) && subQ.push(cur.left);
            (cur.right) && subQ.push(cur.right);
        }
        isOrder = !isOrder;
        res.push(subRes);
        queque = subQ;
    }
    return res;
};