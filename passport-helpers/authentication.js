var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var UserCtrl = require('../controllers/user');

passport.use(new LocalStrategy({
	usernameField: 'login',
	passwordField: 'password'
}, function(login, password, done) {
	console.log('LocalStrategy');
	UserCtrl.getByLogin(login).then((user) => {
		if (!user) {
			return done(null, false, { message: 'Incorrect login or password.' });
		}
		if (password !== user.password) {
			return done(null, false, { message: 'Incorrect login or password.' });
		}

		return done(null, user, {});
    });
}));

passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	UserCtrl.getById(id).then((err, user) => {
		err 
			? done(err)
			: done(null, user);
	});
});

module.exports = passport;