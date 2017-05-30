'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _colors = require('material-ui/styles/colors');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _MenuItem = require('material-ui/MenuItem');

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