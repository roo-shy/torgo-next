
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, __resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _darkBaseTheme = __webpack_require__(654);

var _darkBaseTheme2 = _interopRequireDefault(_darkBaseTheme);

var _Dialog = __webpack_require__(623);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _colors = __webpack_require__(567);

var _FlatButton = __webpack_require__(628);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _getMuiTheme = __webpack_require__(588);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = __webpack_require__(653);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _reactTapEventPlugin = __webpack_require__(674);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _AppBar = __webpack_require__(621);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Drawer = __webpack_require__(625);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _MenuItem = __webpack_require__(637);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Rooshy/Desktop/Projects/torgo-next/pages/index.js?entry';


// Make sure react-tap-event-plugin only gets injected once
// Needed for material-ui
if (!process.tapEventInjected) {
  (0, _reactTapEventPlugin2.default)();
  process.tapEventInjected = true;
}

var styles = {
  container: {
    textAlign: 'center'
  }
};

var muiTheme = (0, _getMuiTheme2.default)({
  palette: {
    accent1Color: _colors.cyan500
  },
  appBar: {
    height: 50
  }
});

var Main = function (_Component) {
  (0, _inherits3.default)(Main, _Component);

  (0, _createClass3.default)(Main, null, [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var req = _ref.req;

      // Ensures material-ui renders the correct css prefixes server-side
      var userAgent = void 0;
      if (process.browser) {
        userAgent = navigator.userAgent;
      } else {
        userAgent = req.headers['user-agent'];
      }

      return { userAgent: userAgent };
    }
  }]);

  function Main(props, context) {
    (0, _classCallCheck3.default)(this, Main);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Main.__proto__ || (0, _getPrototypeOf2.default)(Main)).call(this, props, context));

    _this.handleRequestClose = function () {
      _this.setState({
        open: false
      });
    };

    _this.handleTouchTap = function () {
      _this.setState({
        open: true
      });
    };

    _this.handleToggle = function () {
      return _this.setState({ open: !_this.state.open });
    };

    _this.handleClose = function () {
      return _this.setState({ open: false });
    };

    _this.state = {
      open: false
    };
    return _this;
  }

  (0, _createClass3.default)(Main, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var userAgent = this.props.userAgent;

      var standardActions = _react2.default.createElement(_FlatButton2.default, {
        label: 'Ok',
        primary: Boolean(true),
        onTouchTap: this.handleRequestClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      });

      return _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: muiTheme, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement('div', { style: styles.container, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(_AppBar2.default, {
        title: 'Manos The Rise of Torgo',
        iconClassNameRight: 'muidocs-icon-navigation-expand-more',
        onTouchTap: this.handleToggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), _react2.default.createElement(_Drawer2.default, {
        docked: false,
        width: 200,
        open: this.state.open,
        onRequestChange: function onRequestChange(open) {
          return _this2.setState({ open: open });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(_MenuItem2.default, { onTouchTap: this.handleClose, __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, 'Menu Item'), _react2.default.createElement(_MenuItem2.default, { onTouchTap: this.handleClose, __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, 'Menu Item 2'))));
    }
  }]);

  return Main;
}(_react.Component);

exports.default = Main;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Rooshy/Desktop/Projects/torgo-next/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Rooshy/Desktop/Projects/torgo-next/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56), "?entry"))

/***/ }),

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(594);


/***/ })

},[685]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9kYzM1YTQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlOzs7O0FBQ1I7Ozs7QUFDQTs7OztBQUNDOztBQUNEOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7QUFFUDtBQUNBO0FBQ0EsSUFBSSxDQUFDLFFBQVEsa0JBQ1g7QUFDQTtVQUFRLG1CQUNUOzs7QUFFRCxJQUFNOztlQUVTO0FBQVg7QUFERjs7QUFLRixJQUFNOztBQUlKO0FBRkU7O1lBR1E7QUFBUjtBQUpGLENBRGU7O0lBU1g7Ozs7OzBDQUM2QjtVQUFBLFdBQy9COztBQUNBO1VBQUksaUJBQ0o7VUFBSSxRQUFRLFNBQ1Y7b0JBQVksVUFDYjtBQUZELGFBR0U7b0JBQVksSUFBSSxRQUNqQjtBQUVEOzthQUFPLEVBQUUsV0FDVjtBQUVEOzs7Z0JBQWEsT0FBTyxTQUFTO3dDQUFBOztrSUFDckIsT0FBTzs7VUFNZixxQkFBcUIsWUFDbkI7WUFBSztjQUdOO0FBRkc7QUFUeUI7O1VBYTdCLGlCQUFpQixZQUNmO1lBQUs7Y0FHTjtBQUZHO0FBZnlCOztVQW1CN0IsZUFBZTthQUFNLE1BQUssU0FBUyxFQUFDLE1BQU0sQ0FBQyxNQUFLLE1BQU07QUFuQnpCOztVQXFCN0IsY0FBYzthQUFNLE1BQUssU0FBUyxFQUFDLE1BQU07QUFuQnZDOztVQUFLO1lBQ0c7QUFBTjtXQUVIOzs7Ozs2QkFrQlM7bUJBQUE7O1VBQ0EsWUFBYyxLQUFLLE1BRTNCOztVQUFNLGtDQUNIO2VBRUM7aUJBQVMsUUFDVDtvQkFBWSxLQUFLOztvQkFIbkI7c0JBT0Y7QUFQRTtBQUNFLE9BREY7OzZCQVFDLDRDQUFpQixVQUFVO29CQUE1QjtzQkFDRTtBQURGO09BQUEsa0JBQ0UsdUJBQUssT0FBTyxPQUFPO29CQUFuQjtzQkFDRTtBQURGO3lCQUNHO2VBRUM7NEJBQ0E7b0JBQVksS0FBSzs7b0JBSG5CO3NCQUtDO0FBTEQ7QUFDRSwwQkFJQTtnQkFFQztlQUNBO2NBQU0sS0FBSyxNQUNYO3lCQUFpQix5QkFBQyxNQUFEO2lCQUFVLE9BQUssU0FBUyxFQUFDLE1BQUQ7QUFKM0M7O29CQUFBO3NCQU1FO0FBTkY7QUFDRSx5QkFLQyxvQ0FBUyxZQUFZLEtBQUs7b0JBQTNCO3NCQUFBO0FBQUE7U0FDQSw4QkFBQyxvQ0FBUyxZQUFZLEtBQUs7b0JBQTNCO3NCQUFBO0FBQUE7U0FNVjs7Ozs7QUFHSDs7a0JBQWUsSyIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBkYXJrQmFzZVRoZW1lIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9iYXNlVGhlbWVzL2RhcmtCYXNlVGhlbWUnXG5pbXBvcnQgRGlhbG9nIGZyb20gJ21hdGVyaWFsLXVpL0RpYWxvZydcbmltcG9ydCB7Y3lhbjUwMH0gZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL2NvbG9ycydcbmltcG9ydCBGbGF0QnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ZsYXRCdXR0b24nXG5pbXBvcnQgZ2V0TXVpVGhlbWUgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL2dldE11aVRoZW1lJ1xuaW1wb3J0IE11aVRoZW1lUHJvdmlkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL011aVRoZW1lUHJvdmlkZXInXG5pbXBvcnQgaW5qZWN0VGFwRXZlbnRQbHVnaW4gZnJvbSAncmVhY3QtdGFwLWV2ZW50LXBsdWdpbidcbmltcG9ydCBBcHBCYXIgZnJvbSAnbWF0ZXJpYWwtdWkvQXBwQmFyJ1xuaW1wb3J0IERyYXdlciBmcm9tICdtYXRlcmlhbC11aS9EcmF3ZXInXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnbWF0ZXJpYWwtdWkvTWVudUl0ZW0nXG5cbi8vIE1ha2Ugc3VyZSByZWFjdC10YXAtZXZlbnQtcGx1Z2luIG9ubHkgZ2V0cyBpbmplY3RlZCBvbmNlXG4vLyBOZWVkZWQgZm9yIG1hdGVyaWFsLXVpXG5pZiAoIXByb2Nlc3MudGFwRXZlbnRJbmplY3RlZCkge1xuICBpbmplY3RUYXBFdmVudFBsdWdpbigpXG4gIHByb2Nlc3MudGFwRXZlbnRJbmplY3RlZCA9IHRydWVcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb250YWluZXI6IHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gIH1cbn1cblxuY29uc3QgbXVpVGhlbWUgPSBnZXRNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBhY2NlbnQxQ29sb3I6IGN5YW41MDAsXG4gIH0sXG4gIGFwcEJhcjoge1xuICAgIGhlaWdodDogNTAsXG4gIH0sXG59KTtcblxuY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVxIH0pIHtcbiAgICAvLyBFbnN1cmVzIG1hdGVyaWFsLXVpIHJlbmRlcnMgdGhlIGNvcnJlY3QgY3NzIHByZWZpeGVzIHNlcnZlci1zaWRlXG4gICAgbGV0IHVzZXJBZ2VudFxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICB9IGVsc2Uge1xuICAgICAgdXNlckFnZW50ID0gcmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXVxuICAgIH1cblxuICAgIHJldHVybiB7IHVzZXJBZ2VudCB9XG4gIH1cblxuICBjb25zdHJ1Y3RvciAocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUmVxdWVzdENsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3BlbjogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlVG91Y2hUYXAgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVuOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoe29wZW46ICF0aGlzLnN0YXRlLm9wZW59KTtcblxuICBoYW5kbGVDbG9zZSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gIFxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgdXNlckFnZW50IH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBzdGFuZGFyZEFjdGlvbnMgPSAoXG4gICAgICA8RmxhdEJ1dHRvblxuICAgICAgICBsYWJlbD0nT2snXG4gICAgICAgIHByaW1hcnk9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgIG9uVG91Y2hUYXA9e3RoaXMuaGFuZGxlUmVxdWVzdENsb3NlfVxuICAgICAgLz5cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPE11aVRoZW1lUHJvdmlkZXIgbXVpVGhlbWU9e211aVRoZW1lfT5cbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPEFwcEJhclxuICAgICAgICAgICAgdGl0bGU9XCJNYW5vcyBUaGUgUmlzZSBvZiBUb3Jnb1wiXG4gICAgICAgICAgICBpY29uQ2xhc3NOYW1lUmlnaHQ9XCJtdWlkb2NzLWljb24tbmF2aWdhdGlvbi1leHBhbmQtbW9yZVwiXG4gICAgICAgICAgICBvblRvdWNoVGFwPXt0aGlzLmhhbmRsZVRvZ2dsZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgICA8RHJhd2VyXG4gICAgICAgICAgICAgZG9ja2VkPXtmYWxzZX1cbiAgICAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICBvblJlcXVlc3RDaGFuZ2U9eyhvcGVuKSA9PiB0aGlzLnNldFN0YXRlKHtvcGVufSl9XG4gICAgICAgICAgID5cbiAgICAgICAgICAgICA8TWVudUl0ZW0gb25Ub3VjaFRhcD17dGhpcy5oYW5kbGVDbG9zZX0+TWVudSBJdGVtPC9NZW51SXRlbT5cbiAgICAgICAgICAgICA8TWVudUl0ZW0gb25Ub3VjaFRhcD17dGhpcy5oYW5kbGVDbG9zZX0+TWVudSBJdGVtIDI8L01lbnVJdGVtPlxuICAgICAgICAgICA8L0RyYXdlcj5cbiAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        