'use strict';

import '../style/app.css';

require('../../node_modules/babel-polyfill/lib/index.js');
require('../../node_modules/whatwg-fetch/fetch.js');
require("file-loader?name=index.html!../../index.html");

    window.onload = () => {
        let content = document.getElementById('content');
        content.addEventListener('click', (e) => {

            require.ensure(['./services/serviceFactory'], function(require) { 
                let ServiceFactory = require('./services/serviceFactory');
                let component = new ServiceFactory().createService(e.target.getAttribute('component'));   
                component.load(content);
            });
        });
};

