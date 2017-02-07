/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _articleModule = __webpack_require__(1);

	var _articleModule2 = _interopRequireDefault(_articleModule);

	var _adminRouting = __webpack_require__(16);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var adminApp = angular.module("adminApp", ["ngRoute", _articleModule2.default.name]).config(["$routeProvider", "$locationProvider", _adminRouting.routes]);

	module.exports = adminApp;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _articleListController = __webpack_require__(2);

	var _articleAddController = __webpack_require__(3);

	var _articleService = __webpack_require__(4);

	var _articleService2 = _interopRequireDefault(_articleService);

	var _categoryService = __webpack_require__(5);

	var _categoryService2 = _interopRequireDefault(_categoryService);

	var _articleListComponent = __webpack_require__(6);

	var _categoryComponent = __webpack_require__(9);

	var _articleAdd = __webpack_require__(12);

	var _capitalizeCase = __webpack_require__(15);

	var _capitalizeCase2 = _interopRequireDefault(_capitalizeCase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var articleApp = angular.module('articleApp', ["ngResource"]).controller('ArticleListController', ['articleService', 'categoryService', _articleListController.ArticleListController]).controller('ArticleAddController', ['$location', 'articleService', 'categoryService', _articleAddController.ArticleAddController]).factory('articleService', ['$resource', _articleService2.default]).factory('categoryService', ['$resource', _categoryService2.default]).directive('articleAdd', _articleAdd.articleAdd).component('articleListComponent', _articleListComponent.articleListComponent).component('categoryComponent', _categoryComponent.categoryComponent).filter("capitalizeCase", _capitalizeCase2.default);

	exports.default = articleApp;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ArticleListController = exports.ArticleListController = function () {
	    function ArticleListController(articleService, categoryService) {
	        _classCallCheck(this, ArticleListController);

	        this.articleService = articleService;
	        this.categoryService = categoryService;

	        this.getArticles();
	        this.getCategories();
	    }

	    _createClass(ArticleListController, [{
	        key: "getArticles",
	        value: function getArticles() {
	            var _this = this;

	            this.articleService.query().$promise.then(function (articles) {
	                debugger;
	                _this.articles = articles;
	            });
	        }
	    }, {
	        key: "getCategories",
	        value: function getCategories() {
	            var _this2 = this;

	            this.categoryService.query().$promise.then(function (categories) {
	                var categoriesNames = [];

	                categories.forEach(function (category) {
	                    categoriesNames.push(category.name);
	                });

	                _this2.categories = categoriesNames;
	            });
	        }
	    }]);

	    return ArticleListController;
	}();

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ArticleAddController = exports.ArticleAddController = function () {
	    function ArticleAddController(location, ArticleService, сategoryService) {
	        _classCallCheck(this, ArticleAddController);

	        this.ArticleService = ArticleService;
	        this.article = new ArticleService();
	        this.сategoryService = сategoryService;
	        this.location = location;

	        this.getCategories();
	    }

	    _createClass(ArticleAddController, [{
	        key: "saveArticle",
	        value: function saveArticle() {
	            var _this = this;

	            debugger;
	            var fd = new FormData();
	            for (var key in this.article) {
	                fd.append(key, this.article[key]);
	            }

	            this.ArticleService.create({}, fd).$promise.then(function () {
	                _this.location.path("/");
	            });
	        }
	    }, {
	        key: "getCategories",
	        value: function getCategories() {
	            var _this2 = this;

	            this.сategoryService.query().$promise.then(function (categories) {
	                var categoriesNames = [];

	                categories.forEach(function (category) {
	                    categoriesNames.push(category.name);
	                });

	                _this2.categories = categoriesNames;
	            });
	        }
	    }]);

	    return ArticleAddController;
	}();

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function ($resource) {
	    var url = '/api/articles/:articleId';
	    return $resource(url, { articleId: '@id' }, {
	        create: {
	            method: "POST",
	            transformRequest: angular.identity,
	            headers: { 'Content-Type': undefined }
	        },
	        update: {
	            method: "PUT",
	            transformRequest: angular.identity,
	            headers: { 'Content-Type': undefined }
	        } });
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function ($resource) {
	    var url = '/api/articles/categories';
	    return $resource(url, {}, {
	        get: {
	            method: "GET",
	            transformRequest: angular.identity,
	            headers: { 'Content-Type': undefined }
	        } });
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.articleListComponent = undefined;

	var _articleListComponentCtrl = __webpack_require__(7);

	var articleListComponent = exports.articleListComponent = {
	    bindings: {
	        defaultMessage: '<',
	        articles: '<'
	    },
	    controller: _articleListComponentCtrl.articleListComponentCtrl,
	    template: __webpack_require__(8)
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var articleListComponentCtrl = exports.articleListComponentCtrl = function articleListComponentCtrl() {
	    _classCallCheck(this, articleListComponentCtrl);
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <p ng-bind=\"$ctrl.articles.length\"></p>\r\n\r\n    <div ng-repeat=\"article in $ctrl.articles | orderBy:'publishDate'\">\r\n            <p ng-bind=\"article.title\"></p>\r\n    </div>\r\n</div>"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.categoryComponent = undefined;

	var _categoryComponentCtrl = __webpack_require__(10);

	var categoryComponent = exports.categoryComponent = {
	    bindings: {
	        defaultMessage: '<',
	        categories: '<'
	    },
	    controller: _categoryComponentCtrl.categoryComponentCtrl,
	    template: __webpack_require__(11)
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var categoryComponentCtrl = exports.categoryComponentCtrl = function categoryComponentCtrl() {
	    _classCallCheck(this, categoryComponentCtrl);
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n\r\n    <div ng-repeat=\"category in $ctrl.categories\">\r\n            <div ng-bind=\"category | capitalizeCase\" class=\"category\"></div>\r\n    </div>\r\n</div>"

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.articleAdd = undefined;

	var _articleAddCtrl = __webpack_require__(13);

	var articleAdd = exports.articleAdd = function articleAdd() {
	    return {
	        restrict: 'E',
	        scope: {
	            article: '=',
	            categories: '=',
	            saveArticle: '&'
	        },
	        template: __webpack_require__(14),
	        controller: _articleAddCtrl.ArticleAddCtrl,
	        controllerAs: 'articleAddCtrl',
	        bindToController: true
	    };
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ArticleAddCtrl = exports.ArticleAddCtrl = function () {
	    function ArticleAddCtrl() {
	        _classCallCheck(this, ArticleAddCtrl);
	    }

	    _createClass(ArticleAddCtrl, [{
	        key: "save",
	        value: function save() {
	            debugger;
	            var file = this.addEditArticleForm.picture.$$element[0].files[0];
	            this.article.picture = file;
	            this.article.category = this.addEditArticleForm.category.$$element[0].selectedOptions.label;
	            this.saveArticle();
	        }
	    }]);

	    return ArticleAddCtrl;
	}();

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<div><h2>Add Article</h2>\r\n  <form ng-submit=\"articleAddCtrl.addEditArticleForm.$valid && articleAddCtrl.save()\" name=\"articleAddCtrl.addEditArticleForm\" novalidate=\"novalidate\">\r\n    <div class=\"inputName\">Title:</div>\r\n    <div>\r\n      <input type=\"text\" name=\"title\" ng-model='articleAddCtrl.article.title' ng-required='true'/>\r\n      <span style='color:red' ng-show='articleAddCtrl.addEditArticleForm.title.$invalid && (articleAddCtrl.addEditArticleForm.title.$dirty || articleAddCtrl.addEditArticleForm.$submitted)'>Article's title is required</span>\r\n    </div>\r\n    <div class=\"inputName\">Content:</div>\r\n    <div>\r\n      <textarea type=\"text\" name=\"content\" ng-model='articleAddCtrl.article.content' ng-required='true'></textarea>\r\n      <span style='color:red' ng-show='articleAddCtrl.addEditArticleForm.content.$invalid && (articleAddCtrl.addEditArticleForm.content.$dirty || articleAddCtrl.addEditArticleForm.$submitted)'>Article's content is required</span>\r\n    </div>\r\n    <div class=\"inputName\">Category:</div>\r\n    <select ng-model=\"articleAddCtrll.category\" name=\"category\" ng-options=\"category for category in articleAddCtrl.categories | capitalizeCase\">\r\n    </select>\r\n    <div class=\"inputName\" >Picture:</div>\r\n    <div>\r\n      <input type=\"file\" name=\"picture\" ng-model='articleAddCtrl.article.pathImg'/>\r\n    </div>\r\n    <button type=\"submit\">Add</button>\r\n  </form></div>\r\n"

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {
	    return function (input) {
	        if (angular.isString(input)) {
	            return angular.uppercase(input[0]) + angular.lowercase(input.substring(1));
	        } else {
	            return input;
	        }
	    };
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var routes = exports.routes = function routes($routeProvider, $locationProvider) {
	    $routeProvider.when('/', {
	        template: __webpack_require__(17),
	        controller: 'ArticleListController',
	        controllerAs: 'articleListCtrl',
	        caseInsensitiveMatch: true
	    });

	    $routeProvider.when('/add', {
	        template: __webpack_require__(18),
	        controller: 'ArticleAddController',
	        controllerAs: 'articleAddCtrl',
	        caseInsensitiveMatch: true
	    });

	    // $routeProvider.when("/:articleId", 
	    //     {
	    //         template: require('./articles/article.html'),
	    //         controller: 'ArticleCtrl',
	    //         controllerAs: 'articleCtrl',
	    //         caseInsensitiveMatch: true,
	    //         data: {}
	    //     });

	    $locationProvider.html5Mode(true);
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <category-component categories=\"articleListCtrl.categories\"></category-component>\r\n    <a href='/admin/add'>Add article</a>\r\n    <article-list-component articles=\"articleListCtrl.articles\"></article-list-component>\r\n</div>\r\n\r\n\r\n"

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<article-add article='articleAddCtrl.article' categories='articleAddCtrl.categories' save-article='articleAddCtrl.saveArticle()'></article-add> "

/***/ }
/******/ ]);