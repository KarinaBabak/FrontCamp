'use strict';
import '../style/app.css';
import './modules/news/img/newsArticleDefault.jpg';
import ServiceFactory from './news/services/serviceFactory';

require('../../node_modules/babel-polyfill/lib/index.js');
require('../../node_modules/whatwg-fetch/fetch.js');
require("file-loader?name=index.html!../../index.html");

    window.onload = () => {
    document.getElementById('news').onclick = function(e) {

        require.ensure(['./modules/news/news'], function(require) {
            let newsComponent = new ServiceFactory().createService(e.target.getAttribute('id'));   
            newsComponent.load();
        });
    }
};

