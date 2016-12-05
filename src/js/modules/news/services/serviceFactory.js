

export default class ServiceFactory {

    createService(service) {
        if(service =='news') {
            let News = require('../news');
            return new News();
        }

    }
}