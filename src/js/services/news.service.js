const URL = 'https://newsapi.org/v1/';
const API_KEY = "54a34e3171eb4b3b9e21ddf80b7c5997";

class NewsService {
    constructor(url = URL, apiKey = API_KEY) {
        this.url = url;
        this.apiKey = apiKey;
    }

    get(request) {
        return fetch(this.url + request, {method: 'GET', mode: 'cors'})
            .then(response => response.json())
            .catch(error => console.log(error));
    };

    getArticles(sourceId) {
        return this.get(`articles?source=${sourceId}&apiKey=${this.apiKey}`)
            .then((articles) => {
                return articles.articles.map((article) => {
                    let newArticle = new Article(
                        article.title, article.description, article.url, article.urlToImage);
                    newArticle.publishedAt = article.publishedAt;
                    });
            });
    };

    getSources() {
        return this.get('sources')
            .then(sources => { 
                return sources.sources.map(source => {
                    new Source(source.id, source.name, source.description, source.category, source.urlsToLogos.small);
                });
            });         
    };
}