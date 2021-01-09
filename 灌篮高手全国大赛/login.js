//1. 引入Express框架
const express = require('express');
//2. 使用框架创建web服务器
const app = express();
//3. 声明模板文目录(需要创建views目录,并将html文件放到该目录中)
app.use("/", express.static("views"));
//声明静态资源目录
app.use("/static", express.static("static"));
//4. 引入body-parser模块
const bodyParser = require('body-parser');
let predeModel = require('./static/Scame.js')

//5. 配置body-parser模块
app.use(bodyParser.urlencoded({ extended: false }));

//7. 创建路由
//添加数据
app.post("/add", function (request, response) {
    //接受get数据
    let data = request.body;
    let { teamName, teamBoss, month } = data;
    console.log(data);
    predeModel.create({
        teamName,
        teamBoss,
        month
    }, err => {
        if (err) console.log(err);
    })
    let result = "add_over";
    response.send(JSON.stringify(result));
});
//修改
app.post("/update", function (request, response) {
    //接受get数据
    let data = request.body;
    let { oldTeamName, newTeamName, oldTeamBoss, newTeamBoss, oldMonth, newMonth } = data;
    console.log(data);
    predeModel.update({
        teamName: oldTeamName,
        teamBoss: oldTeamBoss,
        month: oldMonth,
    }, {
        $set: {
            teamName: newTeamName,
            teamBoss: newTeamBoss,
            month: newMonth
        }
    },
        err => {
            if (err) console.log(err);
        })
    let result = "uppdate_over";
    response.send(JSON.stringify(result));
});
//查找
app.post("/find", function (request, response) {
    //接受get数据
    let data = request.body;
    let { teamName, } = data;
    console.log(data);
    predeModel.find({
        teamName,
    }, (err, data) => {
        if (err) console.log(err);
        response.send(JSON.stringify(data));
    })
});
//通过id查找
app.post("/findId", function (request, response) {
    //接受get数据
    let data = request.body;
    let { _id } = data;
    console.log(data);
    predeModel.find({
        _id,
    }, (err, data) => {
        if (err) console.log(err);
        response.send(JSON.stringify(data));
    })
});
//查找全部
app.post("/findAll", function (request, response) {
    //接受get数据
    predeModel.find({
    }, (err, data) => {
        if (err) console.log(err);
        response.send(JSON.stringify(data));
    })
});
//删除
app.post("/delete", function (request, response) {
    //接受get数据
    let data = request.body;
    let { _id } = data;
    console.log(data);
    predeModel.remove({
        _id: _id
    }, (err, data) => {
        if (err) console.log(err);
    })
    let result = "delete_over";
    response.send(JSON.stringify(result));
});
//8. 程序监听3000端口
app.listen(3223);