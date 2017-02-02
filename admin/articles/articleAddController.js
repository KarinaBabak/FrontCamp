export class ArticleAddController {
    constructor(location, ArticleService) {
        this.ArticleService = ArticleService;
        this.article = new ArticleService();
        this.location = location;
    }

    saveArticle() {
        var fd = new FormData();
        for (var key in this.article) {
            fd.append(key, this.article[key]);
        }
        
        this.ArticleService.create({}, fd).$promise.then(() => {
            this.location.path("/");
        })
    }

}