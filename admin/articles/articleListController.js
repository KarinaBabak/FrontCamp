export class ArticleListController {
    constructor(articleService) {
        this.articleService = articleService;

        this.getArticles();
    }

    getArticles() {
        this.articleService.query().$promise.then((articles) => {
            this.articles = articles;
        });
    }

}