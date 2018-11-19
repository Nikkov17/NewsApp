define(["exports", "./constants.js"], function (exports, _constants) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = cardFactoryFunction;

  var _constants2 = _interopRequireDefault(_constants);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function cardFactoryFunction(item) {
    var author = item.author,
        title = item.title,
        content = item.content,
        description = item.description,
        publishedAt = item.publishedAt,
        urlToImage = item.urlToImage,
        url = item.url;
    var insertString = "<div class=\"news-item-header\">\n        <div class=\"news-item-header-info\">\n            ".concat(title ? "<div class=\"news-item-title\">".concat(title, "</div>") : "", "\n            ").concat(author ? "<div class=\"news-item-author\">".concat(author, "</div>") : "", "\n            ").concat(publishedAt ? "<div class=\"news-item-publishedat\">".concat(formatDateTime(publishedAt), "</div>") : "", "\n            ").concat(description ? "<article class=\"news-item-article\">".concat(description, "</article>") : "", "\n            ").concat(content ? "<article class=\"news-item-article\">".concat(content, "</article>") : "", "\n        </div>\n        <div class=\"news-item-header-image-container\">\n            ").concat(urlToImage ? "<img class=\"news-item-header-image\" src=".concat(urlToImage, ">") : "", "\n            ").concat(url ? "<a class=\"news-item-link-to-original\" href=".concat(url, ">Link to original article</a>") : "", "\n        </div>\n    </div>");
    render(insertString);
  }

  ;

  function render(elementHtml) {
    var newsItem = document.createElement('div');
    newsItem.className = 'news-item';
    newsItem.innerHTML = elementHtml;

    _constants2.default.NEWSCONTAINER.appendChild(newsItem);
  }

  function formatDateTime(dateTimeString) {
    var yearDayMonth = dateTimeString.split('T')[0].replaceAll('-', '.');
    var time = dateTimeString.split('T')[1].substring(0, 5);
    return "published ".concat(yearDayMonth, " at ").concat(time, ".");
  }

  ;
});
define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var APIKEY = 'b1489445b9fb4d2b98dbf211c114989b';
  var NEWSCONTAINER = document.querySelector('.news-container');
  var FORM = document.querySelector('.form');
  var ERRORWINDOW = document.querySelector('.error-notification');
  exports.default = {
    APIKEY: APIKEY,
    NEWSCONTAINER: NEWSCONTAINER,
    FORM: FORM,
    ERRORWINDOW: ERRORWINDOW
  };
});
define(["exports", "./constants.js"], function (exports, _constants) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = SendFetch;

  var _constants2 = _interopRequireDefault(_constants);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function SendFetch(_x) {
    return _SendFetch.apply(this, arguments);
  }

  function _SendFetch() {
    _SendFetch = _asyncToGenerator(regeneratorRuntime.mark(function _callee(value) {
      var result, url;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = "https://newsapi.org/v2/top-headlines?" + "sources=".concat(value, "&") + "apiKey=".concat(_constants2.default.APIKEY);
              return _context.abrupt("return", fetch(url).then(function (response) {
                result = response.json();
                return result;
              }).then(function (result) {
                return result.articles;
              }).catch(function (error) {
                return error;
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    return _SendFetch.apply(this, arguments);
  }

  ;
});
define(["./constants.js", "./getdata.js", "./cardfactory.js"], function (_constants, _getdata, _cardfactory) {
  "use strict";

  var _constants2 = _interopRequireDefault(_constants);

  var _getdata2 = _interopRequireDefault(_getdata);

  var _cardfactory2 = _interopRequireDefault(_cardfactory);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  _constants2.default.FORM.onsubmit = getElements;

  function getElements(_x) {
    return _getElements.apply(this, arguments);
  }

  function _getElements() {
    _getElements = _asyncToGenerator(regeneratorRuntime.mark(function _callee(event) {
      var value, articlesArray;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              _constants2.default.NEWSCONTAINER.innerHTML = '';

              _constants2.default.ERRORWINDOW.classList.remove('show');

              value = this['0'].value;
              _context.prev = 4;
              _context.next = 7;
              return (0, _getdata2.default)(value);

            case 7:
              articlesArray = _context.sent;
              insertItems(articlesArray);
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](4);
              errorNotification();

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[4, 11]]);
    }));
    return _getElements.apply(this, arguments);
  }

  ;

  function insertItems(articlesArray) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = articlesArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        (0, _cardfactory2.default)(item);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
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

  ;

  function errorNotification() {
    _constants2.default.ERRORWINDOW.classList.add('show');
  }

  ;

  String.prototype.replaceAll = function (search, replace) {
    return this.split(search).join(replace);
  };
});
