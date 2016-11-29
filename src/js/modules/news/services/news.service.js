'use strict';

import Article from '../models/article';
import Source from '../models/source';
import {URL, API_KEY} from './news.service.config'

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
