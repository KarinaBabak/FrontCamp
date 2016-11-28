webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _group = __webpack_require__(3);

	var _news = __webpack_require__(4);

	var _news2 = _interopRequireDefault(_news);

	var _article = __webpack_require__(5);

	var _article2 = _interopRequireDefault(_article);

	var _source = __webpack_require__(6);

	var _source2 = _interopRequireDefault(_source);

	var _sourceHeading = __webpack_require__(7);

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
	module.exports = exports['default'];

/***/ },
/* 3 */
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _article = __webpack_require__(5);

	var _article2 = _interopRequireDefault(_article);

	var _source = __webpack_require__(6);

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
	module.exports = exports['default'];

/***/ },
/* 5 */
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
	    this.publishedAt = publishedAt ? new Date(publishedAt).toLocaleDateString() : " ";
	};

	exports.default = Article;
	module.exports = exports["default"];

/***/ },
/* 6 */
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
	module.exports = exports['default'];

/***/ },
/* 7 */
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
	module.exports = exports["default"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _news = __webpack_require__(9);

	var _news2 = _interopRequireDefault(_news);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = "     \n        <div id=\"content\">\n            <div class=\"dropdown\">      \n                <ul id=\"categoryList\"></ul>\n                <h3 id=\"titleSource\"></h3>\n                <div id=\"articles\"></div>\n            </div>\n        </div>";
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/less-loader/index.js!./../../../../../node_modules/autoprefixer-loader/index.js!./news.less", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/less-loader/index.js!./../../../../../node_modules/autoprefixer-loader/index.js!./news.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  outline: none !important;\n}\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"PT Sans\", Helvetica, Arial, sans-serif;\n  padding: 30px 40px;\n}\n#categoryList {\n  width: 100%;\n  display: table;\n  background-color: #2441a5;\n  border-radius: 5px;\n  color: #FFF;\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);\n}\n#categoryList .category {\n  list-style-type: none;\n  text-align: center;\n  text-transform: capitalize;\n  display: table-cell;\n  padding: 10px 0;\n  cursor: pointer;\n  border-right: 1px solid rgba(255, 255, 255, 0.2);\n}\n#categoryList .category:hover ul {\n  display: block;\n}\n#categoryList .category ul {\n  display: none;\n  position: absolute;\n  background-color: #2441a5;\n  text-align: left;\n  margin: 7px 0 0 0;\n  font-size: 14px;\n  padding: 10px 0;\n  overflow-y: auto;\n  max-height: 360px;\n}\n#categoryList .category ul li {\n  display: block;\n  padding: 4px 20px;\n}\n#categoryList .category ul li:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n#categoryList .category ul li img {\n  width: 18px;\n  margin: -3px 18px 0 0;\n  vertical-align: middle;\n  background-color: #fff;\n}\n#categoryList .category ul::-webkit-scrollbar {\n  width: 6px;\n}\n#categoryList .category ul::-webkit-scrollbar-track {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n#categoryList .category ul::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.4);\n}\n.article {\n  min-width: 150px;\n  width: 22%;\n  margin: 20px 1.5% 0;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n  display: inline-block;\n  vertical-align: top;\n}\n.article a {\n  color: #2441a5;\n}\n.article a:visited {\n  color: #999;\n}\n.article .cover_article {\n  height: 160px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  border-radius: 4px 4px 0 0;\n}\n.article .info {\n  padding: 6px 10px;\n  background-color: rgba(0, 0, 0, 0.35);\n  color: #fff;\n  font-size: 11px;\n  margin: -26px 0 0 0;\n  text-align: right;\n}\n.article .title,\n.article .description {\n  padding: 10px;\n}\n#titleSource {\n  padding: 20px 0 0 1.5%;\n}\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
]);
//# sourceMappingURL=1.1.js.map