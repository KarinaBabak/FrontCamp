var express = require('express');
var router = express.Router();
var multer  = require('multer');
var articleCtrl = require('../controllers/article');
var pictureCtrl = require('../controllers/picture')

var upload = multer({ dest: 'public/uploads' });

router.get('/add', function(req, res, next) {
  res.render('addArticle', {});
});

router.post('/add', upload.single('picture'), function(req, res, next) {
  var pathImg = pictureCtrl.getImgPath(req.file);

  articleCtrl.addArticle(req.body.title, req.body.content,
                    new Date().toLocaleDateString(), req.body.category, pathImg, 'picture');
                    
  res.send('Article is added');

});

router.get('/show', function(req, res, next) {

});

module.exports = router;