export default class ServiceFactory {

    createService(service) {
        if(service =='news') {
            let News;
console.log('I am in ServiceFactory');
            require.ensure(['../modules/news/news'], function(require) {
                News = require('../modules/news/news');                            
            });
            
            return new News();
        }
    }
}