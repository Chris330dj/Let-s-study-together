// 过时的实现 - 使用XHLHttpRequest实现
// 1. 创建XMLHttpRequest对象
let xhr = new XMLHttpRequest();
// 2. 创建HTTP请求, 第三个参数(可选, 默认true)是否为async异步方式
const url = '/server';
xhr.open('get', url, true);

// 3. 设置请求头 (可选)
xhr.responseType = 'json';
xhr.setRequestHeader('Accept', 'application/json');

// 4. 设置状态监听函数
xhr.onreadystatechange = function () {
    // 5. 处理响应
    // 此处this为xhr, 4表示请求/响应过程已完成
    if (this.readyState === 4) {
        if (this.status === 200) {
            // 成功
            // handle(this.responseText);
        } else {
            // 失败
        }
    }
}
// 6. 发送HTTP请求, 不用传数据时必须填null
xhr.send(null);


// 过时的实现2 - 使用Promise封装出一个getJSON()
function getJSON(url) {
    return new Promise((reslove, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('get', url);
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    reslove(this.responseText);
                } else {
                    reject(new Error(this.statusText));
                }
            }
        }
        //
        xhr.responseType = 'json';
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.send(null);
    })
}


// 高级api直接调用
fetch(url, {
    method: "POST",
    body: req,
    headers: myHeader
}).then(res => {
    console.log(res);
})
