export class ArticleEditController {
    constructor($location, $routeParams, articleService, categoryService) {
        this.articleService = articleService;
        this.categoryService = categoryService;
        this.$location = $location;
        this.article = new articleService();

        this.getArticle($routeParams.articleId);
        this.getCategories();
    }

    getArticle(id) {
        debugger;
        this.articleService.get({ articleId: id }).$promise.then((article) => {
            this.article = article;
        });
    };

    getCategories() {
        debugger;
        this.categoryService.query().$promise.then((categories) => {
            var categoriesNames =[];
            
            categories.forEach(function(category) {
                categoriesNames.push(category.name);                           
            });  

            this.categories = categoriesNames;
        });
    }

     save() {
         debugger;
        var fd = new FormData();
        for (var key in this.article) {
            fd.append(key, this.article[key]);
        }
        fd.append('id', this.article._id);
        
        this.articleService.update({}, fd).$promise.then(() => {
            this.$location.path("/");
        })
    };

    delete() {
        debugger;
        this.articleService.delete({ articleId: this.article._id }).$promise.then(() => {
            this.$location.path("/");
        })
    }
   
}