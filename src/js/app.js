'use strict';

import '../style/app.css';
import ServiceFactory from './services/serviceFactory';

require('../../node_modules/babel-polyfill/lib/index.js');
require('../../node_modules/whatwg-fetch/fetch.js');
require("file-loader?name=index.html!../../index.html");

    window.onload = () => {
        let serviceFactory = new ServiceFactory();

        for(let content of document.querySelectorAll('#content button')) {
            content.addEventListener('click', (e) => {                   
                let component = serviceFactory.createService(e.target.getAttribute('component'));
                component.load(content.parentNode);
        });
    }
}

 