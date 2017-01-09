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
        return Article.find({}).limit(10).sort({publishDate: -1}).exec();
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
        return Article.findById(articleId).exec();
    },

    getAll: function() {
        return Article.find({}).sort({publishDate: -1}).exec();
    },

    update: function(article, articleId) {
        Article.update({"_id" : articleId},{ $set: article}, function (err) {
            if (err) {
                console.log(err);
            } 
        });
    },

    getByCategory: function(category) {
        return Article.find({category: category}).sort({publishDate: -1}).exec();
    }

}

