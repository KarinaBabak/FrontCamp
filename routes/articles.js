var express = require('express');
var router = express.Router();
var multer  = require('multer');

var articleCtrl = require('../controllers/article');
var categoryCtrl = require('../controllers/category');
var pictureCtrl = require('../controllers/picture');

<<<<<<< HEAD
var storage = multer.diskStorage({ 
=======
var storage = multer.diskStorage({ //dest: 'public/uploads' 
>>>>>>> 0bed88e16368eda05ba507ff317c08d5e568fd79
     destination: function (req, file, cb) {
         cb(null, 'public/uploads/')
      },
     filename: function (req, file, cb) {
       cb(null, file.fieldname + Date.now() + '.' + file.mimetype.split('/')[1])
     }});
<<<<<<< HEAD

var upload = multer({storage: storage});

router.get('/', function(req, res, next) {
  articleCtrl.getAll().then((articles) => {
    res.render('article/private/showAllArticles',{ articles });
=======

var upload = multer({storage: storage});

router.get('/', function(req, res, next) {
  articleCtrl.getAll().then((articles) => {
    res.render('article/showAllArticles',{ articles });
>>>>>>> 0bed88e16368eda05ba507ff317c08d5e568fd79
  });
});

router.get('/add', function(req, res, next) {
   if (!req.user) {
    return res.redirect('/users/login');
  }
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
    res.redirect('/private/articles/' + idArticle);
  })    
});

router.get('/:articleId', function(req, res, next) {
  articleCtrl.getById(req.params['articleId'])
  .then((article) => {
    res.render('article/showArticle', {article});
  });
});
<<<<<<< HEAD

router.get('/edit/:articleId', function(req, res, next) {
   if (!req.user) {
    return res.redirect('/users/login');
  }
  var renderObject = {};

=======

router.get('/edit/:articleId', function(req, res, next) {
   if (!req.user) {
    return res.redirect('/users/login');
  }
  var renderObject = {};

>>>>>>> 0bed88e16368eda05ba507ff317c08d5e568fd79
  articleCtrl.getById(req.params['articleId'])
  .then((article) => {
    renderObject['article'] = article;
  })
  .then(() => {
    categoryCtrl.getAll().then((categoriesNames) => {
      categoriesNames.splice(categoriesNames.indexOf(renderObject.article.category), 1);
      renderObject['allCategories'] = categoriesNames;
      res.render('/editArticle', {renderObject})
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
  .then(() => {
    res.redirect('/' + req.body.id);
  })
});

router.get('/delete/:articleId', function(req, res, next) {
   if (!req.user) {
    return res.redirect('/users/login');
  }
  articleCtrl.remove(req.params['articleId']);
<<<<<<< HEAD
=======

  //  
>>>>>>> 0bed88e16368eda05ba507ff317c08d5e568fd79
});


module.exports = router;