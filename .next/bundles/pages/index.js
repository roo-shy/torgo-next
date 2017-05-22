
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

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

var _RaisedButton = __webpack_require__(614);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

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
    textAlign: 'center',
    paddingTop: 200
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

    _this.state = {
      open: false
    };
    return _this;
  }

  (0, _createClass3.default)(Main, [{
    key: 'render',
    value: function render() {
      var userAgent = this.props.userAgent;

      var standardActions = _react2.default.createElement(_FlatButton2.default, {
        label: 'Ok',
        primary: Boolean(true),
        onTouchTap: this.handleRequestClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      });

      return _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: (0, _getMuiTheme2.default)((0, _extends3.default)({ userAgent: userAgent }, muiTheme)), __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement('div', { style: styles.container, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_Dialog2.default, {
        open: this.state.open,
        title: 'Super Secret Password',
        actions: standardActions,
        onRequestClose: this.handleRequestClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, '1-2-3-4-5'), _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, 'Material-UI'), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, 'example project'), _react2.default.createElement(_RaisedButton2.default, {
        label: 'Super Secret Password',
        secondary: Boolean(true),
        onTouchTap: this.handleTouchTap,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      })));
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

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(581);


/***/ })

},[647]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9hYWM4NmYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZTs7OztBQUNSOzs7O0FBQ0E7Ozs7QUFDQzs7QUFDRDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7O0FBRVA7QUFDQTtBQUNBLElBQUksQ0FBQyxRQUFRLGtCQUNYO0FBQ0E7VUFBUSxtQkFDVDs7O0FBRUQsSUFBTTs7ZUFHRjtnQkFBWTtBQURaO0FBREY7O0FBTUYsSUFBTTs7QUFFWTtBQUFkO0FBREY7O0lBS0k7Ozs7OzBDQUM2QjtVQUFBLFdBQy9COztBQUNBO1VBQUksaUJBQ0o7VUFBSSxRQUFRLFNBQ1Y7b0JBQVksVUFDYjtBQUZELGFBR0U7b0JBQVksSUFBSSxRQUNqQjtBQUVEOzthQUFPLEVBQUUsV0FDVjtBQUVEOzs7Z0JBQWEsT0FBTyxTQUFTO3dDQUFBOztrSUFDckIsT0FBTzs7VUFPZixxQkFBcUIsWUFDbkI7WUFBSztjQUdOO0FBRkc7QUFWeUI7O1VBYzdCLGlCQUFpQixZQUNmO1lBQUs7Y0FHTjtBQUZHO0FBYkY7O1VBQUs7WUFDRztBQUFOO1dBRUg7Ozs7OzZCQWNTO1VBQ0EsWUFBYyxLQUFLLE1BRTNCOztVQUFNLGtDQUNIO2VBRUM7aUJBQVMsUUFDVDtvQkFBWSxLQUFLOztvQkFIbkI7c0JBT0Y7QUFQRTtBQUNFLE9BREY7OzZCQVFDLDRDQUFpQixVQUFVLG9EQUFhLFdBQWIsYUFBMkI7b0JBQXZEO3NCQUNFO0FBREY7T0FBQSxrQkFDRSx1QkFBSyxPQUFPLE9BQU87b0JBQW5CO3NCQUNFO0FBREY7eUJBQ0c7Y0FDTyxLQUFLLE1BQ1g7ZUFDQTtpQkFDQTt3QkFBZ0IsS0FBSzs7b0JBSnZCO3NCQUFBO0FBQUE7QUFDRSxTQU9GOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FDQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQ0Esb0NBQUM7ZUFFQzttQkFBVyxRQUNYO29CQUFZLEtBQUs7O29CQUhuQjtzQkFRUDtBQVJPO0FBQ0U7Ozs7O0FBVVo7O2tCQUFlLEsiLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFpc2VkQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbidcbmltcG9ydCBEaWFsb2cgZnJvbSAnbWF0ZXJpYWwtdWkvRGlhbG9nJ1xuaW1wb3J0IHtkZWVwT3JhbmdlNTAwfSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvY29sb3JzJ1xuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvRmxhdEJ1dHRvbidcbmltcG9ydCBnZXRNdWlUaGVtZSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvZ2V0TXVpVGhlbWUnXG5pbXBvcnQgTXVpVGhlbWVQcm92aWRlciBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvTXVpVGhlbWVQcm92aWRlcidcbmltcG9ydCBpbmplY3RUYXBFdmVudFBsdWdpbiBmcm9tICdyZWFjdC10YXAtZXZlbnQtcGx1Z2luJ1xuXG4vLyBNYWtlIHN1cmUgcmVhY3QtdGFwLWV2ZW50LXBsdWdpbiBvbmx5IGdldHMgaW5qZWN0ZWQgb25jZVxuLy8gTmVlZGVkIGZvciBtYXRlcmlhbC11aVxuaWYgKCFwcm9jZXNzLnRhcEV2ZW50SW5qZWN0ZWQpIHtcbiAgaW5qZWN0VGFwRXZlbnRQbHVnaW4oKVxuICBwcm9jZXNzLnRhcEV2ZW50SW5qZWN0ZWQgPSB0cnVlXG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyOiB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBwYWRkaW5nVG9wOiAyMDBcbiAgfVxufVxuXG5jb25zdCBtdWlUaGVtZSA9IHtcbiAgcGFsZXR0ZToge1xuICAgIGFjY2VudDFDb2xvcjogZGVlcE9yYW5nZTUwMFxuICB9XG59XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICh7IHJlcSB9KSB7XG4gICAgLy8gRW5zdXJlcyBtYXRlcmlhbC11aSByZW5kZXJzIHRoZSBjb3JyZWN0IGNzcyBwcmVmaXhlcyBzZXJ2ZXItc2lkZVxuICAgIGxldCB1c2VyQWdlbnRcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgfSBlbHNlIHtcbiAgICAgIHVzZXJBZ2VudCA9IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J11cbiAgICB9XG5cbiAgICByZXR1cm4geyB1c2VyQWdlbnQgfVxuICB9XG5cbiAgY29uc3RydWN0b3IgKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogZmFsc2VcbiAgICB9XG4gIH1cblxuICBoYW5kbGVSZXF1ZXN0Q2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVuOiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVUb3VjaFRhcCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG9wZW46IHRydWVcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHVzZXJBZ2VudCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3Qgc3RhbmRhcmRBY3Rpb25zID0gKFxuICAgICAgPEZsYXRCdXR0b25cbiAgICAgICAgbGFiZWw9J09rJ1xuICAgICAgICBwcmltYXJ5PXtCb29sZWFuKHRydWUpfVxuICAgICAgICBvblRvdWNoVGFwPXt0aGlzLmhhbmRsZVJlcXVlc3RDbG9zZX1cbiAgICAgIC8+XG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIG11aVRoZW1lPXtnZXRNdWlUaGVtZSh7dXNlckFnZW50LCAuLi5tdWlUaGVtZX0pfT5cbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPERpYWxvZ1xuICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgdGl0bGU9J1N1cGVyIFNlY3JldCBQYXNzd29yZCdcbiAgICAgICAgICAgIGFjdGlvbnM9e3N0YW5kYXJkQWN0aW9uc31cbiAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXt0aGlzLmhhbmRsZVJlcXVlc3RDbG9zZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAxLTItMy00LTVcbiAgICAgICAgICA8L0RpYWxvZz5cbiAgICAgICAgICA8aDE+TWF0ZXJpYWwtVUk8L2gxPlxuICAgICAgICAgIDxoMj5leGFtcGxlIHByb2plY3Q8L2gyPlxuICAgICAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgICAgIGxhYmVsPSdTdXBlciBTZWNyZXQgUGFzc3dvcmQnXG4gICAgICAgICAgICBzZWNvbmRhcnk9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgICAgICBvblRvdWNoVGFwPXt0aGlzLmhhbmRsZVRvdWNoVGFwfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        