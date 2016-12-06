export default class ServiceFactory {

    createService(service) {
        if(service =='news') {
            let News;

            require.ensure(['../modules/news/news'], function(require) {
                News = require('../modules/news/news');                            
            });
            
            return new News();
        }

    }
}