module.exports = function (req, res, next){
  console.log(req.isAuthenticated());
  console.log(req.originalUrl);
  req.isAuthenticated()
    ? next()
    : res.redirect('/users/login');
};