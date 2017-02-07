export class ArticleAddCtrl {
    constructor() {

    }

    save() {
        debugger;
        let file = this.addEditArticleForm.picture.$$element[0].files[0];
        this.article.picture = file;
        this.article.category = this.addEditArticleForm.category.$$element[0].selectedOptions.label;
        this.saveArticle();
    }
}