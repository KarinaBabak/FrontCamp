export default class Article {
    constructor(title, description, url, urlToImage, publishedAt) {
        this.title = title;
        this.description = description;
        this.url = url;
        this.urlToImage = urlToImage || './img/newsArticleDefault.jpg';
        this.publishedAt = publishedAt ? new Date(publishedAt).toLocaleDateString() : " ";
        this.shortDescription = (description != null) ? description.substr(0, 100) + '...' : '';
    }
}