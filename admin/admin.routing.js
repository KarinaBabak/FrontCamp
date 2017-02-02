export const routes = ($routeProvider, $locationProvider) => {
    $routeProvider.when('/',
        {
            template: require('./articles/articleList.html'),
            controller:'ArticleListController',
            controllerAs: 'articleListCtrl',
            caseInsensitiveMatch: true
        });

    $routeProvider.when('/add',
        {
            template: require('./articles/articleAdd.html'),
            controller:'ArticleAddController',
            controllerAs: 'articleAddCtrl',
            caseInsensitiveMatch: true
        });

        $locationProvider.html5Mode(true);
};