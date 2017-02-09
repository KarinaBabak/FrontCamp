import { ArticleComponentCtrl } from './articleComponentCtrl.js';

export const articleComponent = {
    bindings: {
        article: '=',
        categories: '=',
        saveArticle: '&',
        deleteArticle: '&'
    },
    template: require('./articleComponent.html'),
    controller: ArticleComponentCtrl
};