import { ArticleListController } from './articleListController';
import { ArticleAddController } from './articleAddController';
import resourceService from './article.service.js';
import resourceCategoryService from './category.service.js';
import {articleListComponent} from './components/article-list/articleListComponent';
import {categoryComponent} from './components/categories/categoryComponent'
import {articleAdd} from './directives/article-add/articleAdd';
import {minLengthValidation} from './directives/checkMinLength';
import capitalizeCase from './filters/capitalizeCase';

var articleApp = angular.module('articleApp', ["ngResource"])
    .controller('ArticleListController', ['articleService', 'categoryService', ArticleListController])
    .controller('ArticleAddController', ['$location', 'articleService', 'categoryService', ArticleAddController])
    .factory('articleService', ['$resource', resourceService])
    .factory('categoryService', ['$resource', resourceCategoryService])
    .directive('minLengthValidation', minLengthValidation)
    .directive('articleAdd', articleAdd)
    .component('articleListComponent', articleListComponent)
    .component('categoryComponent', categoryComponent)
    .filter("capitalizeCase", capitalizeCase);

export default articleApp;