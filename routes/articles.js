var express = require('express');
var router = express.Router();
var multer  = require('multer');
var async = require('async');
var articleCtrl = require('../controllers/article');
var categoryCtrl = require('../controllers/category');
var pictureCtrl = require('../controllers/picture');

var upload = multer({ dest: 'public/uploads' });

router.get('/add', function(req, res, next) {

  categoryCtrl.getAll().then(function (categories) {
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
  articleCtrl.add({
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        imagePath: pictureCtrl.getImgPath(req.file),
        imageTitle: req.file.originalname
  })
  .then((idArticle) => {
    res.redirect('/articles/' + idArticle);
  })      
  
});

router.get('/:articleId', function(req, res, next) {
  console.log('kukusiki');
  articleCtrl.getById(req.params['articleId'])
  .then((article) => {
    console.log(article);
    res.render('showArticle', {article});
  });
});



module.exports = router;