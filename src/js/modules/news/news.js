'use strict';

import {defineGroup} from './extensions/group';
import NewsService from './services/news.service';
import Article from './models/article';
import Source from './models/source';
import SourceHeading from './models/sourceHeading';
import newsContent from './newsContent';



export default class News {
    constructor(contentElement) {
        defineGroup();
        this.contentElement = contentElement;
        this.newsService = new NewsService();

        this.sourceTemplate = (source) => {
                return `<li id="${source.id}" class="source" title="${source.description}">
                            <img 
                                src="${source.urlToLogo}" 
                                class="source_logo" 
                                id="${source.id}"
                                <span id="${source.id}" class="source_txt">${source.name}</span>
                        </li>`;
        };

        this.sourceListTemplate = (sourceHeadings) => {
            return sourceHeadings
                        .map(sourceHeading => {
                            return `<li class='category'>${sourceHeading.name}
                                    <ul>
                                        ${(sourceHeading.sources.map((source) => this.sourceTemplate(source))).join('\n')}
                                    </ul>
                                </li>`;
                        })
                        .join('');
        };

        this.articleTemplate = (article) => {
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
                        <div class="description">${article.description}</div>
                    </div>`;
        };

        this.articleListTemplate = (articles) => {
            return articles
                        .map((article) => {
                            (article.description != null)? article.description.substr(0, 100) + '...' : '';        
                            return this.articleTemplate(article);
                        })
                        .join('');
        };
    }

    renderMenu(sourceHeadings) {  
        document.getElementById('categoryList').innerHTML = this.sourceListTemplate(sourceHeadings);

        for(let node of document.querySelectorAll('.source')) {
            node.addEventListener('click', (e) => {
                let sourceId = e.target.getAttribute('id');    
                let sourceName = e.target.innerText;
                this.renderTitle(sourceName); 
                this.newsService.getArticles(sourceId)
                    .then((articles) => this.renderArticles(articles));            
            });
        };
    };

    renderArticles(articles) {  
        document.getElementById('articles').innerHTML = this.articleListTemplate(articles);
    };

    renderTitle(title) {
        document.getElementById('titleSource').innerHTML = "News from " + title; 
    };

    load() {
        console.log("Loading...");
        this.contentElement.innerHTML = newsContent;

        this.newsService.getSources()
            .then((sources) => {
                 return sources
                    .group(source => {
                        return source.category})
                    .map((sourceGroup) => {
                        return new SourceHeading(sourceGroup.key, sourceGroup.value);
                    });
            })
            .then((headings) => {
                this.renderMenu(headings);
                return headings[0].sources[0];
            })
            .then((source) => {
                this.renderTitle(source.name);
                return this.newsService.getArticles(source.id);
            })
            .then((articles) => this.renderArticles(articles))
            .then(() => console.log("Loaded."));
    }
}


