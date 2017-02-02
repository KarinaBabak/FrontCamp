var express = require('express');
var router = express.Router();

var categoryCtrl = require('../controllers/category');


router.get('/add', function(req, res, next) {
    res.render('category/addCategory');
});

router.get('/', function(req, res, next) {
    categoryCtrl.getAll().then((articles) => {
    res.json(articles);
  });
});

router.post('/add', function(req, res, next) {
    categoryCtrl.add({
        name: req.body.name
    });
});

module.exports = router;
