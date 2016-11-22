(function() {
    var newsService = new NewsService();   

    let categoriesElement = document.getElementById('categoryList');   
    let articlesElement = document.getElementById('articles');

    let sourceTemplate = (source) => {
            return `<li id="${source.id}" class="source" title="${source.description}">
                        <img 
                            src="${source.urlToLogo}" 
                            class="source_logo" 
                            id="${source.id}"
                            <span id="${source.id}" class="source_txt">${source.name}</span>
                    </li>`;
    };

    let sourceListTemplate = (sourceHeadings) => {
        return sourceHeadings
                    .map(sourceHeading => {
                        return `<li class='category'>${sourceHeading.name}
                                <ul>
                                    ${(sourceHeading.sources.map((source) => sourceTemplate(source))).join('\n')}
                                </ul>
                            </li>`;
                    })
                    .join('');
    }

    let articleTemplate = (article) => {
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

    let articleListTemplate = (articles) => {
        return articles
                    .map((article) => {
                        (article.description != null)? article.description.substr(0, 100) + '...' : '';        
                        return articleTemplate(article);
                    })
                    .join('');
    }

    function renderMenu(sourceHeadings) {
        categoriesElement.innerHTML = sourceListTemplate(sourceHeadings);

        for(let node of document.querySelectorAll('.source')) {
            node.addEventListener('click', (e) => {
                let sourceId = e.target.getAttribute('id');    
                let sourceName = e.target.innerText;
                renderTitle(sourceName); 
                newsService.getArticles(sourceId)
                    .then((articles) => renderArticles(articles));            
            });
        };
    };

    function renderArticles(articles) {
        articlesElement.innerHTML = articleListTemplate(articles);
    };

    function renderTitle(title) {
        document.getElementById('titleSource').innerHTML = "News from " + title; 
    };

    window.onload = () => {
        newsService.getSources()
            .then((sources) => {
                 return sources
                    .group(source => {
                        return source.category})
                    .map((sourceGroup) => {
                        return new SourceHeading(sourceGroup.key, sourceGroup.value);
                    });
            })
            .then((headings) => {
                renderMenu(headings);
                return headings[0].sources[0];
            })
            .then((source) => {
                renderTitle(source.name);
                return newsService.getArticles(source.id);
            })
            .then((articles) => renderArticles(articles));
    };
})();


