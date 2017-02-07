var express = require('express');
var router = express.Router();
//var multer  = require('multer');

//var articleCtrl = require('../controllers/article');
//var categoryCtrl = require('../controllers/category');
//var pictureCtrl = require('../controllers/picture');


router.get('/*', function(req, res, next) {
    res.render('admin/admin');
});

module.exports = router;