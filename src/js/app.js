'use strict';
import '../style/app.css';
import './modules/news/img/newsArticleDefault.jpg';

require('../../node_modules/babel-polyfill/lib/index.js');
require('../../node_modules/whatwg-fetch/fetch.js');
require("file-loader?name=index.html!../../index.html");

    window.onload = () => {
    document.getElementById('news').onclick = function() {
        require.ensure(['./modules/news/news'], function(require) {
            let News = require('./modules/news/news');
            let newsComponent = new News(document.body);   
            newsComponent.load();
        });
    }
};

