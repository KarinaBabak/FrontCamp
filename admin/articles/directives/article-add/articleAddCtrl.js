export class ArticleAddCtrl {
    constructor() {

    }

    save() {
        let file = this.addEditArticleForm.picture.$$element[0].files[0];
        this.article.picture = file;
        this.saveArticle();
    }
}