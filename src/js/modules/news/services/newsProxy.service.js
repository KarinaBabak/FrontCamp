import NewsService from './news.service';

export default class NewsProxyService extends NewsService {
    constructor() {
        super();
        this.timer = 900000;

        this.isAvaliableForSourceRequest = true;
           
    }

    getArticles(sourceId) {        
        this.articles = super.getArticles(sourceId);

        let loggedArticles = [];
        this.articles.then((articles) => {
            articles.map((article) => {
                loggedArticles.push(JSON.stringify(article))
            })
        });

        console.log("Get articles by source: ");
        console.log(loggedArticles);

        return this.articles;

    };

    getSources() {
        if(this.isAvaliableForSourceRequest) {
            this.isAvaliableForSourceRequest = false;            
            this.sources = super.getSources();

            if(typeof this.sources !== 'undefined') {
                console.log("Get all news sources: ");
                let loggedSources = [];
                this.sources.then((sources) => {
                    sources.map((source) => {
                        loggedSources.push(JSON.stringify(source))
                    })
                });
                console.log(loggedSources);
            }

            

            setTimeout(function() {
                this.isAvaliableForSourceRequest = true;
            }, this.timer);        
        } 

        return this.sources;   
    };

    
};