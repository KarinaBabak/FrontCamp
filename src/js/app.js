'use strict';

import '../style/app.css';
import './modules/news/img/newsArticleDefault.jpg';

require('../../node_modules/babel-polyfill/lib/index.js');
require('../../node_modules/whatwg-fetch/fetch.js');
require("file-loader?name=index.html!../../index.html");

    window.onload = () => {
    document.getElementById('news').onclick = function(e) {
        
        require.ensure(['./modules/news/services/serviceFactory'], function(require) { 
            let ServiceFactory = require('./modules/news/services/serviceFactory');

            let component = new ServiceFactory().createService(e.target.getAttribute('id'));   
            component.load(document.body);
        });
    }
};

