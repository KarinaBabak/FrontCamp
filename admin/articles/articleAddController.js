export class ArticleAddController {
    constructor(location, ArticleService, сategoryService) {
        this.ArticleService = ArticleService;
        this.article = new ArticleService();
        this.сategoryService = сategoryService;
        this.location = location;

        this.getCategories();
    }

    saveArticle() {
        debugger;
        var fd = new FormData();
        for (var key in this.article) {
            fd.append(key, this.article[key]);
        }
        
        this.ArticleService.create({}, fd).$promise.then(() => {
            this.location.path("/");
        })
    }

    getCategories() {
        this.сategoryService.query().$promise.then((categories) => {
            var categoriesNames =[];
            
            categories.forEach(function(category) {
                categoriesNames.push(category.name);                           
            });  

            this.categories = categoriesNames;
        });
    }

}