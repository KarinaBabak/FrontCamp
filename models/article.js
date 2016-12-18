var mongoose = require('mongoose');

var Article = mongoose.model('Article', { 
    title: String,
    content: String,
    publishDate: String,
    category: String,
    imagePath: String,
    imageTitle: String
});

module.exports = Article;