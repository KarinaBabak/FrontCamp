'use strict';

import Article from '../models/article';
import Source from '../models/source';

const URL = 'https://newsapi.org/v1/';
const API_KEY = "54a34e3171eb4b3b9e21ddf80b7c5997";

export default class NewsService {
    
    get(request) {
        return fetch(URL + request, {method: 'GET', mode: 'cors'})
            .then(response => response.json())
            .catch(error => console.log(error));
    };

    getArticles(sourceId) {
        return this.get(`articles?source=${sourceId}&apiKey=${API_KEY}`)
            .then((articles) => {
                return articles.articles.map((article) => {
                    return new Article(
                        article.title, article.description, article.url, article.urlToImage, article.publishedAt);
                    });
            });
    };

    getSources() {
        return this.get('sources')
            .then(sources => { 
                return sources.sources.map(source => {
                    return new Source(source.id, source.name, source.description, source.category, source.urlsToLogos.small);
                });
            });         
    };

}
