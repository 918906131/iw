/*
 * AJAX请求
 * @param  {string}  url            请求的URL地址
 * @param  {function}  callback     回调函数
 * @param  {string}  type           请求方式（GET或POST）
 * @param  {string}  data           POST方式发送的数据
 */
function ajax(url, callback, type = "GET", data = "") {
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
    } else
    if (window.ActiveXObject) {
        var xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //2.声明请求地址请求
    if (type == "GET") {
        xhr.open("GET", url, true);
        //3.发送请求
        xhr.send();
    } else {
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        //3.发送请求
        xhr.send(data);
    }

    //4.监听服务端是否响应
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            //接受数据后操作DOM将结果显示在.par页面
            callback(data);
        }
    }
}