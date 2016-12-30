var express = require('express');
var router = express.Router();
var multer  = require('multer');
var async = require('async');
var articleCtrl = require('../controllers/article');
var categoryCtrl = require('../controllers/category');
var pictureCtrl = require('../controllers/picture');

var upload = multer({ dest: 'public/uploads' });

router.get('/add', function(req, res, next) {

  var receivedCategories = categoryCtrl.getAll();

  receivedCategories.then(function (categories) {
    var categoriesNames = [];
    categories.forEach(function(category) {                
        categoriesNames.push(category.name);                
    });  
    res.render('addArticle', {
      categories: categoriesNames
    });
  });
});

router.post('/add', upload.single('picture'), function(req, res, next) {
  var id;

  async.parallel([
    function (callback) {
    return articleCtrl.add({
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        imagePath: pictureCtrl.getImgPath(req.file),
        imageTitle: req.file.originalname
  })
  }
  ], function(err, result) {    
    console.log(result);
  });
  

  // id = articleCtrl.add({
  //       title: req.body.title,
  //       content: req.body.content,
  //       category: req.body.category,
  //       imagePath: pictureCtrl.getImgPath(req.file),
  //       imageTitle: req.file.originalname
  // });

  //console.log(id);

  //res.redirect('/show', articleCtrl.showArticle(article.title));           
  res.send('Article is added');
});

router.get('/:articleId', function(req, res, next) {
  //res.render('showArticle', article);
});


module.exports = router;