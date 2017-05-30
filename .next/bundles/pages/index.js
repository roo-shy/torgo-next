
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, __resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(93);

var _extends3 = _interopRequireDefault(_extends2);

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

var _Dialog = __webpack_require__(622);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _colors = __webpack_require__(569);

var _FlatButton = __webpack_require__(627);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _getMuiTheme = __webpack_require__(588);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = __webpack_require__(652);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _reactTapEventPlugin = __webpack_require__(673);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _AppBar = __webpack_require__(620);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Drawer = __webpack_require__(624);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _MenuItem = __webpack_require__(636);

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

var muiTheme = {
  palette: {
    accent1Color: _colors.deepOrange500
  }
};

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
          lineNumber: 72
        }
      });

      return _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: (0, _getMuiTheme2.default)((0, _extends3.default)({ userAgent: userAgent }, muiTheme)), __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement('div', { style: styles.container, __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_AppBar2.default, {
        title: 'Manos The Rise of Torgo',
        iconClassNameRight: 'muidocs-icon-navigation-expand-more',
        onTouchTap: this.handleToggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
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
          lineNumber: 87
        }
      }, _react2.default.createElement(_MenuItem2.default, { onTouchTap: this.handleClose, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, 'Menu Item'), _react2.default.createElement(_MenuItem2.default, { onTouchTap: this.handleClose, __source: {
          fileName: _jsxFileName,
          lineNumber: 94
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

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(593);


/***/ })

},[684]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz82YWE0OWMzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZTs7OztBQUNSOzs7O0FBQ0M7O0FBQ0Q7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7OztBQUVQO0FBQ0E7QUFDQSxJQUFJLENBQUMsUUFBUSxrQkFDWDtBQUNBO1VBQVEsbUJBQ1Q7OztBQUVELElBQU07O2VBRVM7QUFBWDtBQURGOztBQUtGLElBQU07O0FBRVk7QUFBZDtBQURGOztJQUtJOzs7OzswQ0FDNkI7VUFBQSxXQUMvQjs7QUFDQTtVQUFJLGlCQUNKO1VBQUksUUFBUSxTQUNWO29CQUFZLFVBQ2I7QUFGRCxhQUdFO29CQUFZLElBQUksUUFDakI7QUFFRDs7YUFBTyxFQUFFLFdBQ1Y7QUFFRDs7O2dCQUFhLE9BQU8sU0FBUzt3Q0FBQTs7a0lBQ3JCLE9BQU87O1VBT2YscUJBQXFCLFlBQ25CO1lBQUs7Y0FHTjtBQUZHO0FBVnlCOztVQWM3QixpQkFBaUIsWUFDZjtZQUFLO2NBR047QUFGRztBQWhCeUI7O1VBb0I3QixlQUFlO2FBQU0sTUFBSyxTQUFTLEVBQUMsTUFBTSxDQUFDLE1BQUssTUFBTTtBQXBCekI7O1VBc0I3QixjQUFjO2FBQU0sTUFBSyxTQUFTLEVBQUMsTUFBTTtBQW5CdkM7O1VBQUs7WUFDRztBQUFOO1dBRUg7Ozs7OzZCQWtCUzttQkFBQTs7VUFDQSxZQUFjLEtBQUssTUFFM0I7O1VBQU0sa0NBQ0g7ZUFFQztpQkFBUyxRQUNUO29CQUFZLEtBQUs7O29CQUhuQjtzQkFPRjtBQVBFO0FBQ0UsT0FERjs7NkJBUUMsNENBQWlCLFVBQVUsb0RBQWEsV0FBYixhQUEyQjtvQkFBdkQ7c0JBQ0U7QUFERjtPQUFBLGtCQUNFLHVCQUFLLE9BQU8sT0FBTztvQkFBbkI7c0JBQ0U7QUFERjt5QkFDRztlQUVDOzRCQUNBO29CQUFZLEtBQUs7O29CQUhuQjtzQkFLQztBQUxEO0FBQ0UsMEJBSUE7Z0JBRUM7ZUFDQTtjQUFNLEtBQUssTUFDWDt5QkFBaUIseUJBQUMsTUFBRDtpQkFBVSxPQUFLLFNBQVMsRUFBQyxNQUFEO0FBSjNDOztvQkFBQTtzQkFNRTtBQU5GO0FBQ0UseUJBS0Msb0NBQVMsWUFBWSxLQUFLO29CQUEzQjtzQkFBQTtBQUFBO1NBQ0EsOEJBQUMsb0NBQVMsWUFBWSxLQUFLO29CQUEzQjtzQkFBQTtBQUFBO1NBTVY7Ozs7O0FBR0g7O2tCQUFlLEsiLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRGlhbG9nIGZyb20gJ21hdGVyaWFsLXVpL0RpYWxvZydcbmltcG9ydCB7ZGVlcE9yYW5nZTUwMH0gZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL2NvbG9ycydcbmltcG9ydCBGbGF0QnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ZsYXRCdXR0b24nXG5pbXBvcnQgZ2V0TXVpVGhlbWUgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL2dldE11aVRoZW1lJ1xuaW1wb3J0IE11aVRoZW1lUHJvdmlkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL011aVRoZW1lUHJvdmlkZXInXG5pbXBvcnQgaW5qZWN0VGFwRXZlbnRQbHVnaW4gZnJvbSAncmVhY3QtdGFwLWV2ZW50LXBsdWdpbidcbmltcG9ydCBBcHBCYXIgZnJvbSAnbWF0ZXJpYWwtdWkvQXBwQmFyJ1xuaW1wb3J0IERyYXdlciBmcm9tICdtYXRlcmlhbC11aS9EcmF3ZXInXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnbWF0ZXJpYWwtdWkvTWVudUl0ZW0nXG5cbi8vIE1ha2Ugc3VyZSByZWFjdC10YXAtZXZlbnQtcGx1Z2luIG9ubHkgZ2V0cyBpbmplY3RlZCBvbmNlXG4vLyBOZWVkZWQgZm9yIG1hdGVyaWFsLXVpXG5pZiAoIXByb2Nlc3MudGFwRXZlbnRJbmplY3RlZCkge1xuICBpbmplY3RUYXBFdmVudFBsdWdpbigpXG4gIHByb2Nlc3MudGFwRXZlbnRJbmplY3RlZCA9IHRydWVcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb250YWluZXI6IHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gIH1cbn1cblxuY29uc3QgbXVpVGhlbWUgPSB7XG4gIHBhbGV0dGU6IHtcbiAgICBhY2NlbnQxQ29sb3I6IGRlZXBPcmFuZ2U1MDBcbiAgfVxufVxuXG5jbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoeyByZXEgfSkge1xuICAgIC8vIEVuc3VyZXMgbWF0ZXJpYWwtdWkgcmVuZGVycyB0aGUgY29ycmVjdCBjc3MgcHJlZml4ZXMgc2VydmVyLXNpZGVcbiAgICBsZXQgdXNlckFnZW50XG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgIH0gZWxzZSB7XG4gICAgICB1c2VyQWdlbnQgPSByZXEuaGVhZGVyc1sndXNlci1hZ2VudCddXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdXNlckFnZW50IH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yIChwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUmVxdWVzdENsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3BlbjogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlVG91Y2hUYXAgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVuOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoe29wZW46ICF0aGlzLnN0YXRlLm9wZW59KTtcblxuICBoYW5kbGVDbG9zZSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gIFxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgdXNlckFnZW50IH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBzdGFuZGFyZEFjdGlvbnMgPSAoXG4gICAgICA8RmxhdEJ1dHRvblxuICAgICAgICBsYWJlbD0nT2snXG4gICAgICAgIHByaW1hcnk9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgIG9uVG91Y2hUYXA9e3RoaXMuaGFuZGxlUmVxdWVzdENsb3NlfVxuICAgICAgLz5cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPE11aVRoZW1lUHJvdmlkZXIgbXVpVGhlbWU9e2dldE11aVRoZW1lKHt1c2VyQWdlbnQsIC4uLm11aVRoZW1lfSl9PlxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICA8QXBwQmFyXG4gICAgICAgICAgICB0aXRsZT1cIk1hbm9zIFRoZSBSaXNlIG9mIFRvcmdvXCJcbiAgICAgICAgICAgIGljb25DbGFzc05hbWVSaWdodD1cIm11aWRvY3MtaWNvbi1uYXZpZ2F0aW9uLWV4cGFuZC1tb3JlXCJcbiAgICAgICAgICAgIG9uVG91Y2hUYXA9e3RoaXMuaGFuZGxlVG9nZ2xlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICAgICBkb2NrZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgIG9uUmVxdWVzdENoYW5nZT17KG9wZW4pID0+IHRoaXMuc2V0U3RhdGUoe29wZW59KX1cbiAgICAgICAgICAgPlxuICAgICAgICAgICAgIDxNZW51SXRlbSBvblRvdWNoVGFwPXt0aGlzLmhhbmRsZUNsb3NlfT5NZW51IEl0ZW08L01lbnVJdGVtPlxuICAgICAgICAgICAgIDxNZW51SXRlbSBvblRvdWNoVGFwPXt0aGlzLmhhbmRsZUNsb3NlfT5NZW51IEl0ZW0gMjwvTWVudUl0ZW0+XG4gICAgICAgICAgIDwvRHJhd2VyPlxuICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        