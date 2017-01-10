var express = require('express');
var router = express.Router();
var passport = require('passport');

var UserCtrl = require('../controllers/user');

router.get('/register', function(req, res, next) {
    res.render('user/registration');
});

router.post('/register', function(req, res, next) {
    if(req.body.password === req.body.confPassword) {
        UserCtrl.create({
            login: req.body.login,
            password: req.body.password
        })
        .then((user) => {
            console.log(user);
            req.logIn(user, function(err) {
                return err
                    ? next(err)
                    : res.redirect('/private/articles')
            })
        })
    }
    else {
        res.redirect('/register');
    }
});

router.get('/login', function(req, res, next) {
	res.render('user/login');
});

router.post('/login', function(req, res, next) {
	passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
		}
        if (!user) {
            return res.redirect('/register/');
		}
   
        return req.logIn(user, function(err) {
            if (err) {
                return next(err);
            }
            return res.redirect('articles/private/articles');
        });
    })(req, res, next);
});

router.get('/logout', function(req, res, next) {
	req.logout();
	res.redirect('/articles');
});

module.exports = router;
