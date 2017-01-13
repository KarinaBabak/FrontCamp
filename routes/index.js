var express = require('express');
var router = express.Router();
var articleCtrl = require('../controllers/article');
<<<<<<< HEAD

=======
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
>>>>>>> 0bed88e16368eda05ba507ff317c08d5e568fd79

router.get('/', function(req, res, next) {
  articleCtrl.getAll().then((articles) => {
    res.render('article/showAllArticles',{ articles });
  });
<<<<<<< HEAD
});

router.get('/:articleId', function(req, res, next) {
  articleCtrl.getById(req.params['articleId'])
  .then((article) => {
    res.render('article/showArticle', {article});
  });
=======
>>>>>>> 0bed88e16368eda05ba507ff317c08d5e568fd79
});

module.exports = router;
