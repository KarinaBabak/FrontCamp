export default class ServiceFactory {

    createService(service) {
        if(service =='news') {
            let News = require('./modules/news/news');
            return new News();
        }

    }
}