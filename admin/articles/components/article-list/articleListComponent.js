import { articleListComponentCtrl } from './articleListComponentCtrl';

export const articleListComponent = {
        bindings: {        
            defaultMessage: '<' ,
            articles: '<'
        },    
        controller: articleListComponentCtrl,    
        template: require('./articleListComponent.html')
}