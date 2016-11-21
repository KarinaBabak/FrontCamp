class Render {
    constructor() {
        this.categoriesElement = document.getElementById('categoryList');   
        this.articlesElement = document.getElementById('articles');          
    }

    renderMenu(categoriesList) {
         var categories = {};

                for(let source of categoriesList) {
                    if(typeof categories[source.category] == "undefined") { 
                        categories[source.category] = [];    
                    }                    
                        categories[source.category].push(source);      
                };

                for(let category in categories) {
                    let content = category.replace(/-/g, ' '); 
                    let li = this.createElement('li', content, 'category');                      
                    this.categoriesElement.appendChild(li);

                    let ul = document.createElement('ul');
                    li.appendChild(ul);

                    for(let item of categories[category]) {
                        let content = `<img src="${item.urlsToLogos.small}" class='source_logo' id='${item.id}'><span class='source_txt' id='${item.id}'>${item.name}</span>`;
                        let li = this.createElement('li', content, 'source');                        
                        li.setAttribute('title', item.description);
                        li.setAttribute('id', item.id);
                        ul.appendChild(li);
                    }                                                         
                }           
    };

    renderArticle(articlesList) {  
        this.articlesElement.innerHTML = '';         
        //articlesList.then(articles => {
            for(let article of articlesList.articles) {
                let description = (article.description != null)? article.description.substr(0, 100) + '.' : '';
                let publishedAt = (article.publishedAt != null)? new Date(article.publishedAt).toLocaleDateString() : '&nbsp;';
                let img = (article.urlToImage != null)? article.urlToImage : 'src/img/newsArticleDefault.jpg';

                let content = `<div class='cover_article' style="background-image: url('${img}');"></div>
                               <div class="info">
                                    <i>${publishedAt}</i>
                               </div>
                               <div class="title"><a href="${article.url}" target="_blank">${article.title}</a></div>
                               <div class="description">${description}</div>
                               `;
                let div = this.createElement('div', content, 'article');
                this.articlesElement.appendChild(div);
            };

        //});
    };


    createElement(element, content, className) { 
        let elem = document.createElement(element);
        elem.innerHTML = content;           
        elem.setAttribute('class', className);        
        return elem;
    }; 

    renderTitleSource(sourceID) {
        let source = document.getElementById(sourceID);
        let name = source.getElementsByTagName('span')[0].innerHTML;
           
        document.getElementById('titleSource').innerHTML = "News from " + name;          
    };  
}