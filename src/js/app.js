//import News from './modules/news/news'
'use strict';
//(function() {
    window.onload = () => {
    document.getElementById('news').onclick = function() {
        require.ensure(['./modules/news/news']), function(require) {
            let news = require('./modules/news/news');
            // let newsComponent = new News(document.body);   
            // newsComponent.load();
        }
    }
};
//})();
