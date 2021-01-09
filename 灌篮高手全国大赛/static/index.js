//页面加载完成渲染
$(window).on("load", function () {
    //渲染函数
    lodaPage();
})
//添加
$(".add").click(function () {
    let teamName = $(this).parent().siblings().eq(0).children().val(), teamBoss = $(this).parent().siblings().eq(1).children().val(), month = $(this).parent().siblings().eq(2).children().val();
    let data = `teamName=${teamName}&teamBoss=${teamBoss}&month=${month}`
    promise_ajax("http://127.0.0.1:3223/add", "POST", data).then(res => {
        window.location = './index.html';
    })
});
//查找
$(".search").click(function () {
    let teamName = $(this).parent().siblings().eq(0).children().val();
    $(this).parent().siblings().eq(0).children().val('')
    let data = `teamName=${teamName}`
    async_promise_ajax("http://127.0.0.1:3223/find", "POST", data).then(res => {
        alert("队名:" + res[0].teamName + ",队长:" + res[0].teamBoss + ",建队时长:" + res[0].month);
    })
});
//更新
$("tbody").on("click", "tr td .update", function () {
    let newTeamName = $(this).parent().siblings().eq(0).children().val(), newTeamBoss = $(this).parent().siblings().eq(1).children().val(), newMonth = $(this).parent().siblings().eq(2).children().val();
    let _id = $(this).parent().siblings().eq(0).children().data("id");
    let data_id = `_id=${_id}`
    promise_ajax("http://127.0.0.1:3223/findId", "POST", data_id).then(res => {
        let oldTeamName = res[0].teamName, oldTeamBoss = res[0].teamBoss, oldMonth = res[0].month;
        let data = `newTeamName=${newTeamName}&newTeamBoss=${newTeamBoss}&newMonth=${newMonth}&oldTeamName=${oldTeamName}&oldTeamBoss=${oldTeamBoss}&oldMonth=${oldMonth}`
        promise_ajax("http://127.0.0.1:3223/update", "POST", data).then(res => {
            window.location = './index.html'
        })
    })
})
//删除
$("tbody").on("click", "tr td .delete", function () {
    let _id = $(this).parent().siblings().eq(0).children().data("id");
    let data_id = `_id=${_id}`
    promise_ajax("http://127.0.0.1:3223/delete", "POST", data_id).then(res => {
        window.location = './index.html'
    })
});
//渲染函数
function lodaPage() {
    promise_ajax("http://127.0.0.1:3223/findAll", "POST").then(res => {
        //将查询到的数据分配给模板,返回拼接好的html代码
        var html = template('tpl', {
            users: res
        });
        //将拼接好的html代码显示到页面上
        document.querySelector("tbody").innerHTML = html;
    })
}