var express = require('express');
var router = express.Router();
var articleCtrl = require('../controllers/article');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
  articleCtrl.getAll().then((articles) => {
    res.render('article/showAllArticles',{ articles });
  });
});

module.exports = router;
