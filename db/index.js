var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://test:articles_portal@ds049161.mlab.com:49161/articles_portal');

module.exports = connection;
