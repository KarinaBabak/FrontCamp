import ArticleBuilder from './articleBuilder';

export default class ArticlesBuilder {
    constructor() {
        this.article = new ArticleBuilder();
    }
    
    build(articles) {   
        this.checkExistingArticles();

        return '<div id="articles">'
                 + this.buildArticleItems(articles) 
                 + '</div>';      

       
    };

    buildArticleItems(articles) {
        return articles
                    .map((article) => {
                        return this.article.build(article);
                    })           
                    .join('')
    }

    checkExistingArticles() {
        let existingArticles = document.getElementById('articles');
        if(existingArticles) {
            existingArticles.remove();
        }
    }
}