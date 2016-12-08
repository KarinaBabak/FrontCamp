'use strict';

import '../style/app.css';
import ServiceFactory from './services/serviceFactory';

import '../../node_modules/babel-polyfill/lib/index.js';
import '../../node_modules/whatwg-fetch/fetch.js';
import 'file-loader?name=index.html!../../index.html';

    window.onload = () => {
        let serviceFactory = new ServiceFactory();

        for(let content of document.querySelectorAll('#content button')) {
            content.addEventListener('click', (e) => {                   
                let component = serviceFactory.createService(e.target.getAttribute('component'));
                component.load(content.parentNode);
        });
    }
}

 