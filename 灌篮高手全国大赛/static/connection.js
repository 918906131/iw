//6. 链接数据库
const mongoose = require('mongoose');

let db = mongoose.connect('mongodb://127.0.0.1:27017/dataBase_iw', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
let dbstatus = mongoose.connection;
//链接数据库状态
{
    dbstatus.on("error", function (error) {
        console.log("数据库连接失败：" + error);
    });

    dbstatus.on("open", function () {
        console.log("数据库连接成功");
    })

    dbstatus.on('disconnected', function () {
        console.log('数据库连接断开');
    })
}
module.exports = mongoose;