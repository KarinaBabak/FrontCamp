export const routes = ($routeProvider, $locationProvider) => {
    $routeProvider.when('/',
        {
            template: require('./articles/articleList.template.html'),
            controller:'ArticleListController',
            controllerAs: 'articleListCtrl',
            caseInsensitiveMatch: true
        });

    $routeProvider.when('/add',
        {
            template: require('./articles/articleAdd.template.html'),
            controller:'ArticleAddController',
            controllerAs: 'articleAddCtrl',
            caseInsensitiveMatch: true
        });

    $routeProvider.when("/:articleId", 
        {
            template: require('./articles/articleEdit.template.html'),
            controller: 'ArticleEditController',
            controllerAs: 'articleEditCtrl',
            caseInsensitiveMatch: true,
            data: {}
        });

        $locationProvider.html5Mode(true);
};