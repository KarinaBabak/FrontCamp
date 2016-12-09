'use strict';

import less from "./less/news.less";
import {defineGroup} from './extensions/group';
import NewsProxyService from './services/newsProxy.service';
import Article from './models/article';
import Source from './models/source';
import SourceHeading from './models/sourceHeading';
import ArticlesBuilder from './services/builders/articlesBuilder';
import MenuBuilder from './services/builders/menuBuilder';
import TitleBuilder from './services/builders/titleBuilder';
import './img/newsArticleDefault.jpg';

export default class News {
    constructor() {
        defineGroup();

        this.articlesBuilder = new ArticlesBuilder();
        this.menuBuilder = new MenuBuilder();
        this.titleBuilder = new TitleBuilder();
        this.newsProxyService = new NewsProxyService();        
    }

    subscribe(context) {
        let that = context;
        for(let node of content.querySelectorAll('.source')) {
            node.addEventListener('click', (e) => {
                let sourceId = e.target.getAttribute('id');
                let sourceName = e.target.innerText;
                that.renderTitle(sourceName); 
                that.newsProxyService.getArticles(sourceId)
                    .then((articles) => that.renderArticles(articles));            
            });
        };
    }

    renderMenu(sourceHeadings) {
        this.content.innerHTML = this.menuBuilder.build(sourceHeadings);
    };

    renderArticles(articles) {       
        this.content.innerHTML +=  this.articlesBuilder.build(articles);
    };

    renderTitle(title) {        
        this.content.innerHTML += this.titleBuilder.build(title); 
    };   

    load(contentElement) {
        console.log("Loading...");
        let context = this;
        this.content = contentElement;

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
            .then(() => {
                context.subscribe(context);
            })
            .then(() => console.log("Loaded."));
    }
}