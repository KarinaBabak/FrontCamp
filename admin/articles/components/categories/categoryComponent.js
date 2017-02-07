import { categoryComponentCtrl } from './categoryComponentCtrl';

export const categoryComponent = {
        bindings: {        
            defaultMessage: '<' ,
            categories: '<'
        },    
        controller: categoryComponentCtrl,    
        template: require('./categoryComponent.html')
}