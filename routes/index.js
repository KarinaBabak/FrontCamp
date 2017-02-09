var express = require('express');
var router = express.Router();

var multer  = require('multer');

var articleCtrl = require('../controllers/article');
var categoryCtrl = require('../controllers/category');
var pictureCtrl = require('../controllers/picture');

var storage = multer.diskStorage({ 
     destination: function (req, file, cb) {
         cb(null, 'public/uploads/')
      },
     filename: function (req, file, cb) {
       cb(null, file.fieldname + Date.now() + '.' + file.mimetype.split('/')[1])
     }});

var upload = multer({storage: storage});

router.get('/', function(req, res, next) {
  articleCtrl.getAll().then((articles) => {
    res.json(articles);
  });
});

router.get('/categories', function(req, res, next) {
  categoryCtrl.getAll().then((categories) => {
    res.json(categories);
  });
});

router.post('/', upload.single('picture'), function(req, res, next) {
  console.log('create article');
  console.log(req.body.category);
  articleCtrl.add({
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        imagePath: pictureCtrl.getImgPath(req.file),
        imageTitle: req.file.originalname
  })
  .then((idArticle) => {
    res.json(idArticle);
  })    
});

router.put('/', upload.single('picture'), function(req, res, next) {
  console.log('update!');
  articleCtrl.update({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    imagePath: pictureCtrl.getImgPath(req.file),
    imageTitle: req.file.originalname
  }, req.body.id)
  .then(() => {
    res.json('the article is updated');
  })
});

router.get('/:articleId', function(req, res, next) {
  console.log(req.params.articleId);
  articleCtrl.getById(req.params.articleId)
    .then((article) => {
      res.json(article);
    });
});

router.post('/:articleId', function(req, res, next) {
  console.log('delete!');
  articleCtrl.remove(req.body.id)
    .then(() => {
      res.json('the article is removed');
    })
});

module.exports = router;
