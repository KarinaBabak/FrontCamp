var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        default: 'General'
    }
});

var Category = mongoose.model('Category', categorySchema);
module.exports = Category;