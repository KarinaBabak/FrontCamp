var Article = require('../models/article');

module.exports = {
    addArticle: function(title, content, publishDate, category, imagePath) {

        var article = new Article
        ({
            title: title,
            content: content,
            description: (content != null) ? content.substr(0, 100) + '...' : '',
            publishDate: publishDate,
            category: category,
            imagePath: imagePath
        });

        article.save(function (err) {
            if (err) {
                console.log(err);
            } 
            else {
                console.log('oki-doki');
            }
        });
    },

    showArticle: function(title) {
        Article.find();
    },

    showTopTen: function() {
        Article.find();
    }

}

