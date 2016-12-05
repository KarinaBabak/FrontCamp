export default class ServiceFactory {

    createService(service) {
        if(service =='news') {
            let News;

            require.ensure(['../news'], function(require) {
                News = require('../news');                            
            });
            
            return new News();
        }

    }
}