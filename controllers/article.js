var Article = require('../models/article');

module.exports = {
    add: function(articleModel) {
        return new Promise(function (resolve, reject) {

            var article = new Article
                ({
                    title: articleModel.title,
                    content: articleModel.content,
                    //description: (articleModel.content != null) ? articleModel.content.substr(0, 100) + '...' : '',
                    publishDate: articleModel.publishDate || new Date().toLocaleDateString(),
                    category: articleModel.category,
                    imagePath: articleModel.imagePath,
                    imageTitle: articleModel.imageTitle
                }); //TODO: default img

                article.save(function (err, savedArticle) {
                    if (err) {
                        console.log(err);
                    } 
                    else {
                        console.log('oki-doki');
                        resolve(savedArticle._id);
                    }
                });
            });            
    },

    getTopTen: function() {
        
    },

    remove: function(articleId) {
        Article.remove({_id: articleId}, function(err) {
            if (err) {
                console.log(err);
            } 
            else {
                console.log('The article is removed');
            }
        })
    },

    getById: function(articleId) {
        // Article.findById(articleId, function(err, article) {
        // });

        return Article.findById(articleId).exec();
    }

}

