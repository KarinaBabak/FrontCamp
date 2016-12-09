export default class ArticleBuilder {
    
    build(article) {        

        return `<div class="article">
            <div 
                class='cover_article' 
                style="background-image: url('${article.urlToImage}');">
            </div>
            <div class="info">
                <i>${article.publishedAt}</i>
            </div>
            <div class="title">
                <a href="${article.url}" target="_blank">${article.title}</a>
            </div>
            <div class="description">${article.shortDescription}</div>
        </div>`;
    };
}