var express = require('express');
var router = express.Router();
var multer  = require('multer');

var articleCtrl = require('../controllers/article');
var categoryCtrl = require('../controllers/category');
var pictureCtrl = require('../controllers/picture');

var storage = multer.diskStorage({ //dest: 'public/uploads' 
     destination: function (req, file, cb) {
         cb(null, 'public/uploads/')
      },
     filename: function (req, file, cb) {
       cb(null, file.fieldname + Date.now() + '.' + file.mimetype.split('/')[1])
     }});

var upload = multer({storage: storage});

router.get('/', function(req, res, next) {

  articleCtrl.getAll().then((articles) => {
    res.render('article/showAllArticles',{ articles });
  });
});

router.get('/add', function(req, res, next) {

  categoryCtrl.getAll().then((categoriesNames) => {
    res.render('article/addArticle', {
      categories: categoriesNames
    })
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
  articleCtrl.getById(req.params['articleId'])
  .then((article) => {
    console.log(article);
    res.render('article/showArticle', {article});
  });
});

router.get('/edit/:articleId', function(req, res, next) {
  var renderObject = {};

  articleCtrl.getById(req.params['articleId'])
  .then((article) => {
    renderObject['article'] = article;
  })
  .then(() => {
    categoryCtrl.getAll().then((categoriesNames) => {
      categoriesNames.splice(categoriesNames.indexOf(renderObject.article.category), 1);
      renderObject['allCategories'] = categoriesNames;
      res.render('article/editArticle', {renderObject})
    });
  })
});


router.post('/edit', upload.single('picture'), function(req, res, next) {
  articleCtrl.update({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    imagePath: pictureCtrl.getImgPath(req.file),
    imageTitle: req.file.originalname
  }, req.body.id)
  .then((us) => {
    console.log(us);
    res.redirect('/articles/' + req.body.id);
  })
});

router.get('/delete/:articleId', function(req, res, next) {
  articleCtrl.remove(req.params['articleId']);

  //  
});


module.exports = router;