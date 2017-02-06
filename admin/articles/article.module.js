import { ArticleListController } from './articleListController';
import { ArticleAddController } from './articleAddController';
import resourceService from './article.service.js';
import resourceCategoryService from './category.service.js';
import {articleListComponent} from './components/article-list/articleListComponent'
import {articleAdd} from './directives/article-add/articleAdd'

var articleApp = angular.module('articleApp', ["ngResource"])
    .controller('ArticleListController', ['articleService', 'categoryService', ArticleListController])
    .controller('ArticleAddController', ['$location', 'articleService', ArticleAddController])
    .factory('articleService', ['$resource', resourceService])
    .factory('categoryService', ['$resource', resourceCategoryService])
    .directive('articleAdd', articleAdd)
    .component('articleListComponent', articleListComponent);

export default articleApp;