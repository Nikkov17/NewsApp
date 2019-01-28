let mongoose = require('mongoose');

let Schema = mongoose.Schema;
let articleScheme = new Schema({
    title: String,
    text: String
});
let articlesModel = mongoose.model('articles', articleScheme);

module.exports = articlesModel;