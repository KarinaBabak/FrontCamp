export class ArticleComponentCtrl{
    constructor(){
    }

    save() {
        debugger;
        let file = this.addEditArticleForm.picture.$$element[0].files[0];
        this.article.picture = file;
        if(!this.article.picture) {
            this.article.picture = this.article.pathImage;
        }
        
        this.article.category = this.addEditArticleForm.category.$$element[0].selectedOptions[0].label;
        this.saveArticle();
    }

    delete() {
        this.deleteArticle();
    }
}
