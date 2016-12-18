var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://admin:articles_portal@ds049161.mlab.com:49161/articles_portal');

module.exports = connection;
