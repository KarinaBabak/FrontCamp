import { ArticleComponentCtrl } from './articleComponentCtrl.js';

export const articleComponent = {
    bindings: {
        article: '<'
    },
    template: require('./articleComponent.html'),
    controller: ArticleComponentCtrl
};