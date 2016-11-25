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

	//import News from './modules/news/news'
	'use strict';
	//(function() {

	window.onload = function () {
	    document.getElementById('news').onclick = function () {
	        __webpack_require__(1).ensure(['./modules/news/news']), function (require) {
	            var news = require('./modules/news/news');
	            // let newsComponent = new News(document.body);   
	            // newsComponent.load();
	        };
	    };
	};
	//})();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./modules/news/extensions/group": 2,
		"./modules/news/extensions/group.js": 2,
		"./modules/news/models/article": 3,
		"./modules/news/models/article.js": 3,
		"./modules/news/models/source": 4,
		"./modules/news/models/source.js": 4,
		"./modules/news/models/sourceHeading": 5,
		"./modules/news/models/sourceHeading.js": 5,
		"./modules/news/news": 6,
		"./modules/news/news.js": 6,
		"./modules/news/newsContent": 8,
		"./modules/news/newsContent.js": 8,
		"./modules/news/services/news.service": 7,
		"./modules/news/services/news.service.js": 7
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defineGroup = defineGroup;
	function defineGroup() {
	  Object.defineProperty(Array.prototype, 'group', {
	    enumerable: false,
	    value: function value(key) {
	      var map = {};
	      this.map(function (e) {
	        return { k: key(e), d: e };
	      }).forEach(function (e) {
	        map[e.k] = map[e.k] || [];
	        map[e.k].push(e.d);
	      });
	      return Object.keys(map).map(function (k) {
	        return { key: k, value: map[k] };
	      });
	    }
	  });
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Article = function Article(title, description, url, urlToImage, publishedAt) {
	    _classCallCheck(this, Article);

	    this.title = title;
	    this.description = description;
	    this.url = url;
	    this.urlToImage = urlToImage || 'src/img/newsArticleDefault.jpg';
	    this.publishedAt = publishedAt ? new Date(publishedAt).toLocaleDateString() : "";
	};

	exports.default = Article;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Source = function Source(id, name, description, category, urlToLogo) {
	    _classCallCheck(this, Source);

	    this.id = id;
	    this.name = name;
	    this.description = description;
	    this.category = category.replace(/-/g, ' ');
	    this.urlToLogo = urlToLogo;
	};

	exports.default = Source;
	;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SourceHeading = function SourceHeading(name, sources) {
	    _classCallCheck(this, SourceHeading);

	    this.name = name;
	    this.sources = sources;
	};

	exports.default = SourceHeading;
	;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _group = __webpack_require__(2);

	var _news = __webpack_require__(7);

	var _news2 = _interopRequireDefault(_news);

	var _article = __webpack_require__(3);

	var _article2 = _interopRequireDefault(_article);

	var _source = __webpack_require__(4);

	var _source2 = _interopRequireDefault(_source);

	var _sourceHeading = __webpack_require__(5);

	var _sourceHeading2 = _interopRequireDefault(_sourceHeading);

	var _newsContent = __webpack_require__(8);

	var _newsContent2 = _interopRequireDefault(_newsContent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var News = function () {
	    function News(contentElement) {
	        var _this = this;

	        _classCallCheck(this, News);

	        (0, _group.defineGroup)();
	        this.contentElement = contentElement;
	        this.newsService = new _news2.default();

	        this.sourceTemplate = function (source) {
	            return '<li id="' + source.id + '" class="source" title="' + source.description + '">\n                            <img \n                                src="' + source.urlToLogo + '" \n                                class="source_logo" \n                                id="' + source.id + '"\n                                <span id="' + source.id + '" class="source_txt">' + source.name + '</span>\n                        </li>';
	        };

	        this.sourceListTemplate = function (sourceHeadings) {
	            return sourceHeadings.map(function (sourceHeading) {
	                return '<li class=\'category\'>' + sourceHeading.name + '\n                                    <ul>\n                                        ' + sourceHeading.sources.map(function (source) {
	                    return _this.sourceTemplate(source);
	                }).join('\n') + '\n                                    </ul>\n                                </li>';
	            }).join('');
	        };

	        this.articleTemplate = function (article) {
	            return '<div class="article">\n                        <div \n                            class=\'cover_article\' \n                            style="background-image: url(\'' + article.urlToImage + '\');">\n                        </div>\n                        <div class="info">\n                            <i>' + article.publishedAt + '</i>\n                        </div>\n                        <div class="title">\n                            <a href="' + article.url + '" target="_blank">' + article.title + '</a>\n                        </div>\n                        <div class="description">' + article.description + '</div>\n                    </div>';
	        };

	        this.articleListTemplate = function (articles) {
	            return articles.map(function (article) {
	                article.description != null ? article.description.substr(0, 100) + '...' : '';
	                return _this.articleTemplate(article);
	            }).join('');
	        };
	    }

	    _createClass(News, [{
	        key: 'renderMenu',
	        value: function renderMenu(sourceHeadings) {
	            var _this2 = this;

	            document.getElementById('categoryList').innerHTML = this.sourceListTemplate(sourceHeadings);

	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = document.querySelectorAll('.source')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var node = _step.value;

	                    node.addEventListener('click', function (e) {
	                        var sourceId = e.target.getAttribute('id');
	                        var sourceName = e.target.innerText;
	                        _this2.renderTitle(sourceName);
	                        _this2.newsService.getArticles(sourceId).then(function (articles) {
	                            return _this2.renderArticles(articles);
	                        });
	                    });
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            ;
	        }
	    }, {
	        key: 'renderArticles',
	        value: function renderArticles(articles) {
	            document.getElementById('articles').innerHTML = this.articleListTemplate(articles);
	        }
	    }, {
	        key: 'renderTitle',
	        value: function renderTitle(title) {
	            document.getElementById('titleSource').innerHTML = "News from " + title;
	        }
	    }, {
	        key: 'load',
	        value: function load() {
	            var _this3 = this;

	            console.log("Loading...");
	            this.contentElement.innerHTML = _newsContent2.default;

	            this.newsService.getSources().then(function (sources) {
	                return sources.group(function (source) {
	                    return source.category;
	                }).map(function (sourceGroup) {
	                    return new _sourceHeading2.default(sourceGroup.key, sourceGroup.value);
	                });
	            }).then(function (headings) {
	                _this3.renderMenu(headings);
	                return headings[0].sources[0];
	            }).then(function (source) {
	                _this3.renderTitle(source.name);
	                return _this3.newsService.getArticles(source.id);
	            }).then(function (articles) {
	                return _this3.renderArticles(articles);
	            }).then(function () {
	                return console.log("Loaded.");
	            });
	        }
	    }]);

	    return News;
	}();

	exports.default = News;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _article = __webpack_require__(3);

	var _article2 = _interopRequireDefault(_article);

	var _source = __webpack_require__(4);

	var _source2 = _interopRequireDefault(_source);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var URL = 'https://newsapi.org/v1/';
	var API_KEY = "54a34e3171eb4b3b9e21ddf80b7c5997";

	var NewsService = function () {
	    function NewsService() {
	        _classCallCheck(this, NewsService);
	    }

	    _createClass(NewsService, [{
	        key: 'get',
	        value: function get(request) {
	            return fetch(URL + request, { method: 'GET', mode: 'cors' }).then(function (response) {
	                return response.json();
	            }).catch(function (error) {
	                return console.log(error);
	            });
	        }
	    }, {
	        key: 'getArticles',
	        value: function getArticles(sourceId) {
	            return this.get('articles?source=' + sourceId + '&apiKey=' + API_KEY).then(function (articles) {
	                return articles.articles.map(function (article) {
	                    return new _article2.default(article.title, article.description, article.url, article.urlToImage, article.publishedAt);
	                });
	            });
	        }
	    }, {
	        key: 'getSources',
	        value: function getSources() {
	            return this.get('sources').then(function (sources) {
	                return sources.sources.map(function (source) {
	                    return new _source2.default(source.id, source.name, source.description, source.category, source.urlsToLogos.small);
	                });
	            });
	        }
	    }]);

	    return NewsService;
	}();

	exports.default = NewsService;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = "        \n\n        <div id=\"content\">\n            <div class=\"dropdown\">      \n                <ul id=\"categoryList\"></ul>\n                <h3 id=\"titleSource\"></h3>\n                <div id=\"articles\"></div>\n            </div>\n        </div>";

/***/ }
/******/ ]);