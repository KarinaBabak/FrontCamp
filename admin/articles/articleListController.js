export class ArticleListController {
    constructor(articleService, categoryService) {
        this.articleService = articleService;
        this.categoryService = categoryService;

        this.getArticles();
        this.getCategories();
    }

    getArticles() {
        this.articleService.query().$promise.then((articles) => {
            debugger;
            this.articles = articles;
        });
    }

    getCategories() {
        this.categoryService.query().$promise.then((categories) => {
            var categoriesNames =[];
            
            categories.forEach(function(category) {
                categoriesNames.push(category.name);                           
            });  

            this.categories = categoriesNames;
        });
    }
}