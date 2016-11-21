(function() {

init();
var article, apiWrapper, render;

function init() {
<<<<<<< HEAD:src/js/app.js
    newsServoce = new NewsService();
    render = new Render();    
    //article = new Article(apiWrapper);
    
    // apiWrapper.getSources()
    //     .then(groupByHeading)
    //     .then((headings)=>{
    //     render.renderMenu(headings);
=======
    apiWrapper = new ApiWrapper();
    render = new Render();    
    //article = new Article(apiWrapper);
    
    apiWrapper.getSources()
        .then(groupByHeading)
        .then((headings)=>{
        render.renderMenu(headings);
>>>>>>> 92a141bbbe269cc93c880c5e10b952cc15b21e76:src/js/app.js

    //     apiWrapper.getArticles().then((data2)=>{
    //         render.renderArticle(data2);

    //         let _source_id = data2.source;
    //         render.renderTitleSource(_source_id);
    //     });    
        
    // });
}

function groupByHeading(sources) {
    return [ { heading: 'BBC', sources: sources }];
}

function groupByHeading(sources) {
    return [ { heading: 'BBC', sources: sources }];
}


document.addEventListener('click', function(e){
    let _id, _class, _source_name;

    _class = e.target.getAttribute('class');

    if(_class == 'source' || _class == 'source_logo' || _class == 'source_txt'){
        _id = e.target.getAttribute('id');

        render.renderTitleSource(_id);
        
        apiWrapper.getArticles(_id).then((data2)=>{
            render.renderArticle(data2);
        });   
        
    }
}, false);

<<<<<<< HEAD:src/js/app.js
})();
=======
};
>>>>>>> 92a141bbbe269cc93c880c5e10b952cc15b21e76:src/js/app.js
