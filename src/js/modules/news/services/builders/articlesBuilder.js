import ArticleBuilder from './articleBuilder';

export default class ArticlesBuilder {
    constructor() {
        this.article = new ArticleBuilder();
    }
    
    build(articles) {   
        return this.buildArticleItems(articles);     
       
    };

    buildArticleItems(articles) {
        return articles
                    .map((article) => {
                        return this.article.build(article);
                    })           
                    .join('')
    }    
}