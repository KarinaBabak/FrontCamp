import { ArticleAddCtrl } from './articleAddCtrl';

export const articleAdd = () => {
    return {
        restrict: 'E',        
        scope: {  
            article: '=',
            categories: '=',
            saveArticle: '&'        
        },
        template: require('./articleAdd.html'),
        controller: ArticleAddCtrl,
        controllerAs: 'articleAddCtrl',
        bindToController: true
    }
}