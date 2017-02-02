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
            debugger;
            this.categories = categories;
        });
    }

}