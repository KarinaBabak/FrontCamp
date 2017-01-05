var Category = require('../models/category');

module.exports = {
    getAll: function () {
        return Category.find().exec().then((categories) => {
            var categoriesNames =[];
            
            categories.forEach(function(category) {
                categoriesNames.push(category.name);                           
            });  
            return categoriesNames;
        })
    },

    add: function (categoryName) {
        var category = new Category({
            name: categoryName
        });

        category.save(function (err) {
            if (err) {
                console.log(err);
            } 
            else {
                console.log('New category is added');
            }
        });
    },

    remove: function(categoryName) {
        Category.remove({name: categoryName}, function(err) {
            if (err) {
                console.log(err);
            } 
            else {
                console.log(`Category ${categoryName} is removed`);
            }
        })
    }
};