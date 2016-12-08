'use strict';

import {defineGroup} from './extensions/group';
import NewsProxyService from './services/newsProxy.service';
import Article from './models/article';
import Source from './models/source';
import SourceHeading from './models/sourceHeading';
import ArticleBuilder from './services/builders/articleBuilder';
import MenuBuilder from './services/builders/menuBuilder';
import newsContent from './newsContent';
import './img/newsArticleDefault.jpg';


export default class News {
    constructor() {
        defineGroup();
        this.content = document.getElementById('content');

        this.articleBuilder = new ArticleBuilder();
        this.menuBuilder = new MenuBuilder();
        this.newsProxyService = new NewsProxyService();        
    }

    renderMenu(sourceHeadings) {  
        content.innerHTML += this.menuBuilder.build(sourceHeadings);

        for(let node of document.querySelectorAll('.source')) {
            node.addEventListener('click', (e) => {
                let sourceId = e.target.getAttribute('id');
                let sourceName = e.target.innerText;
                this.renderTitle(sourceName); 
                this.newsProxyService.getArticles(sourceId)
                    .then((articles) => this.renderArticles(articles));            
            });
        };
    };

    renderArticles(articles) {  
        content.innerHTML +=  `<div id="articles">` + this.buildArticles(articles) + '</div>';
    };

    renderTitle(title) {
        content.innerHTML += '<h3 id="titleSource">' + "News from " + title + '</h3>'; 
    };

    buildArticles(articles) {
        return articles
            .map((article) => {
                return this.articleBuilder.build(article);
            })           
            .join('');    
    };

    load(contentElement) {
        console.log("Loading...");
        contentElement.innerHTML = newsContent;

        this.newsProxyService.getSources()
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
                return this.newsProxyService.getArticles(source.id);
            })
            .then((articles) => this.renderArticles(articles))
            .then(() => console.log("Loaded."));
    }
}


