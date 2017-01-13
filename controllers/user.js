var User = require('../models/user');

module.exports = {
    create: function(user) {
        var newUser = new User ({
            login: user.login,
            password: user.password
        });

        return newUser.save();
    },
    getByLogin: function(login) {
        return User.findOne({login: login}).exec();
    },
    getById: function(id) {
        return User.findById(id).exec();
    }
}