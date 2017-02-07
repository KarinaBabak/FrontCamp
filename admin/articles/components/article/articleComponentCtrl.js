export class ArticleComponentCtrl{
    constructor($location){
        this.$location = $location;
    }

    showAll(){
        this.$location.path("/");
    }

    edit(){
        
    }
}
