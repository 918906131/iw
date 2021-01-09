const mongoose = require('./connection.js');
let predeSchema = new mongoose.Schema({
    teamName: { type: String, require: true },
    teamBoss: String,
    month: String,
})
let predeModel = mongoose.model('prede', predeSchema);
module.exports = predeModel;