webpackHotUpdate(5,{

/***/ 581:
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

var _Dialog = __webpack_require__(608);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _colors = __webpack_require__(564);

var _FlatButton = __webpack_require__(611);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _getMuiTheme = __webpack_require__(578);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = __webpack_require__(624);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _reactTapEventPlugin = __webpack_require__(643);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _AppBar = __webpack_require__(651);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Drawer = __webpack_require__(671);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _MenuItem = __webpack_require__(677);

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
        title: 'Title',
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9mMjM5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlOzs7O0FBQ1I7Ozs7QUFDQzs7QUFDRDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7O0FBRVA7QUFDQTtBQUNBLElBQUksQ0FBQyxRQUFRLGtCQUNYO0FBQ0E7VUFBUSxtQkFDVDs7O0FBRUQsSUFBTTs7ZUFFUztBQUFYO0FBREY7O0FBS0YsSUFBTTs7QUFFWTtBQUFkO0FBREY7O0lBS0k7Ozs7OzBDQUM2QjtVQUFBLFdBQy9COztBQUNBO1VBQUksaUJBQ0o7VUFBSSxRQUFRLFNBQ1Y7b0JBQVksVUFDYjtBQUZELGFBR0U7b0JBQVksSUFBSSxRQUNqQjtBQUVEOzthQUFPLEVBQUUsV0FDVjtBQUVEOzs7Z0JBQWEsT0FBTyxTQUFTO3dDQUFBOztrSUFDckIsT0FBTzs7VUFPZixxQkFBcUIsWUFDbkI7WUFBSztjQUdOO0FBRkc7QUFWeUI7O1VBYzdCLGlCQUFpQixZQUNmO1lBQUs7Y0FHTjtBQUZHO0FBaEJ5Qjs7VUFvQjdCLGVBQWU7YUFBTSxNQUFLLFNBQVMsRUFBQyxNQUFNLENBQUMsTUFBSyxNQUFNO0FBcEJ6Qjs7VUFzQjdCLGNBQWM7YUFBTSxNQUFLLFNBQVMsRUFBQyxNQUFNO0FBbkJ2Qzs7VUFBSztZQUNHO0FBQU47V0FFSDs7Ozs7NkJBa0JTO21CQUFBOztVQUNBLFlBQWMsS0FBSyxNQUUzQjs7VUFBTSxrQ0FDSDtlQUVDO2lCQUFTLFFBQ1Q7b0JBQVksS0FBSzs7b0JBSG5CO3NCQU9GO0FBUEU7QUFDRSxPQURGOzs2QkFRQyw0Q0FBaUIsVUFBVSxvREFBYSxXQUFiLGFBQTJCO29CQUF2RDtzQkFDRTtBQURGO09BQUEsa0JBQ0UsdUJBQUssT0FBTyxPQUFPO29CQUFuQjtzQkFDRTtBQURGO3lCQUNHO2VBRUM7NEJBQ0E7b0JBQVksS0FBSzs7b0JBSG5CO3NCQUtDO0FBTEQ7QUFDRSwwQkFJQTtnQkFFQztlQUNBO2NBQU0sS0FBSyxNQUNYO3lCQUFpQix5QkFBQyxNQUFEO2lCQUFVLE9BQUssU0FBUyxFQUFDLE1BQUQ7QUFKM0M7O29CQUFBO3NCQU1FO0FBTkY7QUFDRSx5QkFLQyxvQ0FBUyxZQUFZLEtBQUs7b0JBQTNCO3NCQUFBO0FBQUE7U0FDQSw4QkFBQyxvQ0FBUyxZQUFZLEtBQUs7b0JBQTNCO3NCQUFBO0FBQUE7U0FNVjs7Ozs7QUFHSDs7a0JBQWUsSyIsImZpbGUiOiI1LmZkYWYyNTUzZTQzMDQzOWZlYThhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IERpYWxvZyBmcm9tICdtYXRlcmlhbC11aS9EaWFsb2cnXG5pbXBvcnQge2RlZXBPcmFuZ2U1MDB9IGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9jb2xvcnMnXG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9GbGF0QnV0dG9uJ1xuaW1wb3J0IGdldE11aVRoZW1lIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9nZXRNdWlUaGVtZSdcbmltcG9ydCBNdWlUaGVtZVByb3ZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9NdWlUaGVtZVByb3ZpZGVyJ1xuaW1wb3J0IGluamVjdFRhcEV2ZW50UGx1Z2luIGZyb20gJ3JlYWN0LXRhcC1ldmVudC1wbHVnaW4nXG5pbXBvcnQgQXBwQmFyIGZyb20gJ21hdGVyaWFsLXVpL0FwcEJhcidcbmltcG9ydCBEcmF3ZXIgZnJvbSAnbWF0ZXJpYWwtdWkvRHJhd2VyJ1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ21hdGVyaWFsLXVpL01lbnVJdGVtJ1xuXG4vLyBNYWtlIHN1cmUgcmVhY3QtdGFwLWV2ZW50LXBsdWdpbiBvbmx5IGdldHMgaW5qZWN0ZWQgb25jZVxuLy8gTmVlZGVkIGZvciBtYXRlcmlhbC11aVxuaWYgKCFwcm9jZXNzLnRhcEV2ZW50SW5qZWN0ZWQpIHtcbiAgaW5qZWN0VGFwRXZlbnRQbHVnaW4oKVxuICBwcm9jZXNzLnRhcEV2ZW50SW5qZWN0ZWQgPSB0cnVlXG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyOiB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICB9XG59XG5cbmNvbnN0IG11aVRoZW1lID0ge1xuICBwYWxldHRlOiB7XG4gICAgYWNjZW50MUNvbG9yOiBkZWVwT3JhbmdlNTAwXG4gIH1cbn1cblxuY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVxIH0pIHtcbiAgICAvLyBFbnN1cmVzIG1hdGVyaWFsLXVpIHJlbmRlcnMgdGhlIGNvcnJlY3QgY3NzIHByZWZpeGVzIHNlcnZlci1zaWRlXG4gICAgbGV0IHVzZXJBZ2VudFxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICB9IGVsc2Uge1xuICAgICAgdXNlckFnZW50ID0gcmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXVxuICAgIH1cblxuICAgIHJldHVybiB7IHVzZXJBZ2VudCB9XG4gIH1cblxuICBjb25zdHJ1Y3RvciAocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dClcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVJlcXVlc3RDbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG9wZW46IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVRvdWNoVGFwID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3BlbjogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVUb2dnbGUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHtvcGVuOiAhdGhpcy5zdGF0ZS5vcGVufSk7XG5cbiAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICBcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHVzZXJBZ2VudCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3Qgc3RhbmRhcmRBY3Rpb25zID0gKFxuICAgICAgPEZsYXRCdXR0b25cbiAgICAgICAgbGFiZWw9J09rJ1xuICAgICAgICBwcmltYXJ5PXtCb29sZWFuKHRydWUpfVxuICAgICAgICBvblRvdWNoVGFwPXt0aGlzLmhhbmRsZVJlcXVlc3RDbG9zZX1cbiAgICAgIC8+XG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIG11aVRoZW1lPXtnZXRNdWlUaGVtZSh7dXNlckFnZW50LCAuLi5tdWlUaGVtZX0pfT5cbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPEFwcEJhclxuICAgICAgICAgICAgdGl0bGU9XCJUaXRsZVwiXG4gICAgICAgICAgICBpY29uQ2xhc3NOYW1lUmlnaHQ9XCJtdWlkb2NzLWljb24tbmF2aWdhdGlvbi1leHBhbmQtbW9yZVwiXG4gICAgICAgICAgICBvblRvdWNoVGFwPXt0aGlzLmhhbmRsZVRvZ2dsZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgICA8RHJhd2VyXG4gICAgICAgICAgICAgZG9ja2VkPXtmYWxzZX1cbiAgICAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICBvblJlcXVlc3RDaGFuZ2U9eyhvcGVuKSA9PiB0aGlzLnNldFN0YXRlKHtvcGVufSl9XG4gICAgICAgICAgID5cbiAgICAgICAgICAgICA8TWVudUl0ZW0gb25Ub3VjaFRhcD17dGhpcy5oYW5kbGVDbG9zZX0+TWVudSBJdGVtPC9NZW51SXRlbT5cbiAgICAgICAgICAgICA8TWVudUl0ZW0gb25Ub3VjaFRhcD17dGhpcy5oYW5kbGVDbG9zZX0+TWVudSBJdGVtIDI8L01lbnVJdGVtPlxuICAgICAgICAgICA8L0RyYXdlcj5cbiAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwic291cmNlUm9vdCI6IiJ9