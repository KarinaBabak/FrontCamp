'use strict';

import less from "./less/news.less";
import {defineGroup} from './extensions/group';
import NewsProxyService from './services/newsProxy.service';
import Article from './models/article';
import Source from './models/source';
import SourceHeading from './models/sourceHeading';
import NewsLayoutBuilder from './services/builders/newsLayoutBuilder';
import ArticlesBuilder from './services/builders/articlesBuilder';
import MenuBuilder from './services/builders/menuBuilder';
import TitleBuilder from './services/builders/titleBuilder';
import './img/newsArticleDefault.jpg';

export default class News {

    constructor() {
        defineGroup();

        this.articlesBuilder_ = new ArticlesBuilder();
        this.menuBuilder_ = new MenuBuilder();
        this.newsProxyService_ = new NewsProxyService();        
    }

    subscribe() {
        for(let node of content.querySelectorAll('.source')) {
            node.addEventListener('click', (e) => {
                let sourceId = e.target.getAttribute('id');
                let sourceName = e.target.innerText;
                this.renderTitle_(sourceName); 
                this.newsProxyService_.getArticles(sourceId)
                    .then((articles) => this.renderArticles_(articles));            
            });
        };
    }

    renderMenu_(sourceHeadings) {        
        this.content.querySelector('#categoryList').innerHTML = this.menuBuilder_.build(sourceHeadings);
    }

    renderArticles_(articles) {       
        this.content.querySelector('#articles').innerHTML =  this.articlesBuilder_.build(articles);
    };

    renderTitle_(title) {        
        this.content.querySelector('#titleSource').innerHTML = TitleBuilder.build(title); 
    };   

    load(contentElement) {
        console.log("Loading...");
        let context = this;
        this.content = contentElement;

        this.newsProxyService_.getSources()
            .then((sources) => {
                 return sources
                    .group(source => {
                        return source.category})
                    .map((sourceGroup) => {
                        return new SourceHeading(sourceGroup.key, sourceGroup.value);
                    });
            })
            .then((headings) => {
                this.content.innerHTML = NewsLayoutBuilder.build();
                return headings;
            })
            .then((headings) => {
                this.renderMenu_(headings);
                return headings[0].sources[0];
            })
            .then((source) => {
                this.renderTitle_(source.name);
                return this.newsProxyService_.getArticles(source.id);
            })
            .then((articles) => this.renderArticles_(articles))
            .then(() => {
                context.subscribe();
            })
            .then(() => console.log("Loaded."));
    }
}