var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    publishDate: {
        type: String,
        default: new Date().toLocaleDateString()
    },
    category: {
        type: String,
        default: 'General'
    },
    imagePath: {
        type: String,
        default: '/uploads/pictureDefault.jpeg'
    },
    imageTitle: String
});

articleSchema.virtual('description').get(function() {
        return this.content.substr(0, 100) + '...'
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;