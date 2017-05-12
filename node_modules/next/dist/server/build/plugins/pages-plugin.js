'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PagesPlugin = function () {
  function PagesPlugin() {
    (0, _classCallCheck3.default)(this, PagesPlugin);
  }

  (0, _createClass3.default)(PagesPlugin, [{
    key: 'apply',
    value: function apply(compiler) {
      var isBundledPage = /^bundles[/\\]pages.*\.js$/;
      var matchRouteName = /^bundles[/\\]pages[/\\](.*)\.js$/;

      compiler.plugin('after-compile', function (compilation, callback) {
        var pages = (0, _keys2.default)(compilation.namedChunks).map(function (key) {
          return compilation.namedChunks[key];
        }).filter(function (chunk) {
          return isBundledPage.test(chunk.name);
        });

        pages.forEach(function (chunk) {
          var page = compilation.assets[chunk.name];
          var pageName = matchRouteName.exec(chunk.name)[1];
          var routeName = '/' + pageName.replace(/[/\\]?index$/, '');

          var content = page.source();
          var newContent = '\n          window.__NEXT_REGISTER_PAGE(\'' + routeName + '\', function() {\n            var comp = ' + content + '\n            return { page: comp.default }\n          })\n        ';
          // Replace the exisiting chunk with the new content
          compilation.assets[chunk.name] = {
            source: function source() {
              return newContent;
            },
            size: function size() {
              return newContent.length;
            }
          };
        });
        callback();
      });
    }
  }]);
  return PagesPlugin;
}();

exports.default = PagesPlugin;