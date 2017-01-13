var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var config = require('./config/index');
var passport = require('./passport-helpers/authentication');
var db = require('./db');
var index = require('./routes/index');
var users = require('./routes/users');
var articles = require('./routes/articles');
var category = require('./routes/category');

var mustAuthenticatedMw = require('./passport-helpers/checkAuthMW');

var app = express();

//app.use(express.favicon());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: config.get('session:secret')
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/private/articles', mustAuthenticatedMw);
app.all('/private/articles/*', mustAuthenticatedMw);
app.all('/private/articles/add', mustAuthenticatedMw);
app.all('/private/articles/edit', mustAuthenticatedMw);
app.all('/private/articles/edit/*', mustAuthenticatedMw);
app.all('/private/articles/delete', mustAuthenticatedMw);
app.all('/private/articles/delete/*', mustAuthenticatedMw);

app.use('/', index);
app.use('/users', users);
//app.use('/articles', articles);
app.use('/category', category);
app.use('/private/articles', articles);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;