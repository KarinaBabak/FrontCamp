var express = require('express');
var router = express.Router();
var articleCtrl = require('../controllers/article');

router.get('/', function(req, res, next) {
  articleCtrl.getAll().then((articles) => {
    res.render('article/showAllArticles',{ articles });
  });
});

router.get('/:articleId', function(req, res, next) {
  articleCtrl.getById(req.params['articleId'])
  .then((article) => {
    res.render('article/showArticle', {article});
  });
});

module.exports = router;
