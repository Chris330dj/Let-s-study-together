function arr2Tree(arr, targetId) {
    let tree = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].parentId == targetId){
            let obj = arr[i];
            let children = arr2Tree(arr, arr[i].id);
            if(children.length > 0){
                obj.children = children;
            }
            tree.push(obj);
        }
    }
    return tree;
}

// test
const arr = [
    { id: 40, parentId: 0, note: "一级菜单-1" },
    { id: 20, parentId: 0, note: "一级菜单-2" },
    { id: 22, parentId: 20, note: "二级菜单-22" },
    { id: 24, parentId: 22, note: "三级菜单-24" },
    { id: 34, parentId: 22, note: "三级菜单-34" }
];

console.log(arr2Tree(arr, 0));
