window.onload = function() {
'use strict';

init();
var article, apiWrapper, render;

function init() {
    apiWrapper = new ApiWrapper();
    render = new Render(this);    
    //article = new Article(apiWrapper);
    
    apiWrapper.getSources().then((data)=>{
        render.renderMenu(data);

        apiWrapper.getArticles().then((data2)=>{
            render.renderArticle(data2);

            let _source_id = data2.source;
            render.renderTitleSource(_source_id);
        });    
        
    });
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

};