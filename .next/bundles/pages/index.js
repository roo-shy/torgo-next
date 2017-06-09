
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
          lineNumber: 76
        }
      });

      return _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: muiTheme, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement('div', { style: styles.container, __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement(_AppBar2.default, {
        title: 'Manos The Rise of Torgo',
        iconClassNameRight: 'muidocs-icon-navigation-expand-more',
        onTouchTap: this.handleToggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
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
          lineNumber: 91
        }
      }, _react2.default.createElement(_MenuItem2.default, { onTouchTap: this.handleClose, __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, 'Menu Item'), _react2.default.createElement(_MenuItem2.default, { onTouchTap: this.handleClose, __source: {
          fileName: _jsxFileName,
          lineNumber: 98
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9iNDhmZWVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlOzs7O0FBQ1I7Ozs7QUFDQTs7OztBQUNDOztBQUNEOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7QUFFUDtBQUNBO0FBQ0EsSUFBSSxDQUFDLFFBQVEsa0JBQ1g7QUFDQTtVQUFRLG1CQUNUOzs7QUFFRCxJQUFNOztlQUVTO0FBQVg7QUFERjs7QUFLRixJQUFNOztBQUlKO0FBRkU7O1lBR1E7QUFBUjtBQUpGLENBRGU7O0lBU1g7Ozs7OzBDQUM2QjtVQUFBLFdBQy9COztBQUNBO1VBQUksaUJBQ0o7VUFBSSxRQUFRLFNBQ1Y7b0JBQVksVUFDYjtBQUZELGFBR0U7b0JBQVksSUFBSSxRQUNqQjtBQUVEOzthQUFPLEVBQUUsV0FDVjtBQUVEOzs7Z0JBQWEsT0FBTyxTQUFTO3dDQUFBOztrSUFDckIsT0FBTzs7VUFPZixxQkFBcUIsWUFDbkI7WUFBSztjQUdOO0FBRkc7QUFWeUI7O1VBYzdCLGlCQUFpQixZQUNmO1lBQUs7Y0FHTjtBQUZHO0FBaEJ5Qjs7VUFvQjdCLGVBQWU7YUFBTSxNQUFLLFNBQVMsRUFBQyxNQUFNLENBQUMsTUFBSyxNQUFNO0FBcEJ6Qjs7VUFzQjdCLGNBQWM7YUFBTSxNQUFLLFNBQVMsRUFBQyxNQUFNO0FBbkJ2Qzs7VUFBSztZQUNHO0FBQU47V0FFSDs7Ozs7NkJBa0JTO21CQUFBOztVQUNBLFlBQWMsS0FBSyxNQUUzQjs7VUFBTSxrQ0FDSDtlQUVDO2lCQUFTLFFBQ1Q7b0JBQVksS0FBSzs7b0JBSG5CO3NCQU9GO0FBUEU7QUFDRSxPQURGOzs2QkFRQyw0Q0FBaUIsVUFBVTtvQkFBNUI7c0JBQ0U7QUFERjtPQUFBLGtCQUNFLHVCQUFLLE9BQU8sT0FBTztvQkFBbkI7c0JBQ0U7QUFERjt5QkFDRztlQUVDOzRCQUNBO29CQUFZLEtBQUs7O29CQUhuQjtzQkFLQztBQUxEO0FBQ0UsMEJBSUE7Z0JBRUM7ZUFDQTtjQUFNLEtBQUssTUFDWDt5QkFBaUIseUJBQUMsTUFBRDtpQkFBVSxPQUFLLFNBQVMsRUFBQyxNQUFEO0FBSjNDOztvQkFBQTtzQkFNRTtBQU5GO0FBQ0UseUJBS0Msb0NBQVMsWUFBWSxLQUFLO29CQUEzQjtzQkFBQTtBQUFBO1NBQ0EsOEJBQUMsb0NBQVMsWUFBWSxLQUFLO29CQUEzQjtzQkFBQTtBQUFBO1NBTVY7Ozs7O0FBR0g7O2tCQUFlLEsiLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZGFya0Jhc2VUaGVtZSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvYmFzZVRoZW1lcy9kYXJrQmFzZVRoZW1lJ1xuaW1wb3J0IERpYWxvZyBmcm9tICdtYXRlcmlhbC11aS9EaWFsb2cnXG5pbXBvcnQge2N5YW41MDB9IGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9jb2xvcnMnXG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9GbGF0QnV0dG9uJ1xuaW1wb3J0IGdldE11aVRoZW1lIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9nZXRNdWlUaGVtZSdcbmltcG9ydCBNdWlUaGVtZVByb3ZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9NdWlUaGVtZVByb3ZpZGVyJ1xuaW1wb3J0IGluamVjdFRhcEV2ZW50UGx1Z2luIGZyb20gJ3JlYWN0LXRhcC1ldmVudC1wbHVnaW4nXG5pbXBvcnQgQXBwQmFyIGZyb20gJ21hdGVyaWFsLXVpL0FwcEJhcidcbmltcG9ydCBEcmF3ZXIgZnJvbSAnbWF0ZXJpYWwtdWkvRHJhd2VyJ1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ21hdGVyaWFsLXVpL01lbnVJdGVtJ1xuXG4vLyBNYWtlIHN1cmUgcmVhY3QtdGFwLWV2ZW50LXBsdWdpbiBvbmx5IGdldHMgaW5qZWN0ZWQgb25jZVxuLy8gTmVlZGVkIGZvciBtYXRlcmlhbC11aVxuaWYgKCFwcm9jZXNzLnRhcEV2ZW50SW5qZWN0ZWQpIHtcbiAgaW5qZWN0VGFwRXZlbnRQbHVnaW4oKVxuICBwcm9jZXNzLnRhcEV2ZW50SW5qZWN0ZWQgPSB0cnVlXG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyOiB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICB9XG59XG5cbmNvbnN0IG11aVRoZW1lID0gZ2V0TXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgYWNjZW50MUNvbG9yOiBjeWFuNTAwLFxuICB9LFxuICBhcHBCYXI6IHtcbiAgICBoZWlnaHQ6IDUwLFxuICB9LFxufSk7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICh7IHJlcSB9KSB7XG4gICAgLy8gRW5zdXJlcyBtYXRlcmlhbC11aSByZW5kZXJzIHRoZSBjb3JyZWN0IGNzcyBwcmVmaXhlcyBzZXJ2ZXItc2lkZVxuICAgIGxldCB1c2VyQWdlbnRcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgfSBlbHNlIHtcbiAgICAgIHVzZXJBZ2VudCA9IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J11cbiAgICB9XG5cbiAgICByZXR1cm4geyB1c2VyQWdlbnQgfVxuICB9XG5cbiAgY29uc3RydWN0b3IgKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogZmFsc2VcbiAgICB9XG4gIH1cblxuICBoYW5kbGVSZXF1ZXN0Q2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVuOiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVUb3VjaFRhcCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG9wZW46IHRydWVcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlVG9nZ2xlID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7b3BlbjogIXRoaXMuc3RhdGUub3Blbn0pO1xuXG4gIGhhbmRsZUNsb3NlID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyB1c2VyQWdlbnQgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHN0YW5kYXJkQWN0aW9ucyA9IChcbiAgICAgIDxGbGF0QnV0dG9uXG4gICAgICAgIGxhYmVsPSdPaydcbiAgICAgICAgcHJpbWFyeT17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgb25Ub3VjaFRhcD17dGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2V9XG4gICAgICAvPlxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8TXVpVGhlbWVQcm92aWRlciBtdWlUaGVtZT17bXVpVGhlbWV9PlxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICA8QXBwQmFyXG4gICAgICAgICAgICB0aXRsZT1cIk1hbm9zIFRoZSBSaXNlIG9mIFRvcmdvXCJcbiAgICAgICAgICAgIGljb25DbGFzc05hbWVSaWdodD1cIm11aWRvY3MtaWNvbi1uYXZpZ2F0aW9uLWV4cGFuZC1tb3JlXCJcbiAgICAgICAgICAgIG9uVG91Y2hUYXA9e3RoaXMuaGFuZGxlVG9nZ2xlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICAgICBkb2NrZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgIG9uUmVxdWVzdENoYW5nZT17KG9wZW4pID0+IHRoaXMuc2V0U3RhdGUoe29wZW59KX1cbiAgICAgICAgICAgPlxuICAgICAgICAgICAgIDxNZW51SXRlbSBvblRvdWNoVGFwPXt0aGlzLmhhbmRsZUNsb3NlfT5NZW51IEl0ZW08L01lbnVJdGVtPlxuICAgICAgICAgICAgIDxNZW51SXRlbSBvblRvdWNoVGFwPXt0aGlzLmhhbmRsZUNsb3NlfT5NZW51IEl0ZW0gMjwvTWVudUl0ZW0+XG4gICAgICAgICAgIDwvRHJhd2VyPlxuICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        