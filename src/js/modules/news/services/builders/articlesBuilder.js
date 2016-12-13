import ArticleBuilder from './articleBuilder';

export default class ArticlesBuilder {
    constructor() {
        this.articleBuilder = new ArticleBuilder();
    }
    
    build(articles) {   
        return this.buildArticleItems_(articles);
    };

    buildArticleItems_(articles) {
        return articles
                    .map((article) => {
                        return this.articleBuilder.build(article);
                    })
                    .join('');
    }; 
}
