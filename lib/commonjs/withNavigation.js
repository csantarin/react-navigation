"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _useCompatNavigation = _interopRequireDefault(require("./useCompatNavigation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const withNavigation = Component => {
  //#endregion
  const componentDisplayName = Component.displayName || Component.name;
  const WrappedComponent = Component;
  const wrappedComponentDisplayName = "withNavigation(".concat(componentDisplayName, ")");

  const NavigationComponent = props => {
    const navigation = (0, _useCompatNavigation.default)();
    return (
      /*#__PURE__*/
      // @ts-expect-error: type checking HOC is hard
      // if we hadn't override the built-in ref with our custom onRef (official API since v4!!!), this
      // would've been fine without bypassing the type checking. unfortunately, v4 & v5/compat spec is
      // like this, so, the bypass has to stay to ease the implementation...
      React.createElement(WrappedComponent, _extends({}, props, {
        ref: props.onRef,
        navigation: navigation
      }))
    );
  };

  (0, _hoistNonReactStatics.default)(NavigationComponent, Component);
  NavigationComponent.displayName = wrappedComponentDisplayName; // 1. Inject HOC-specific props.
  // 2. Retain C-specific props.
  // 3. Retain C-specific statics.

  //#endregion
  return NavigationComponent;
};

var _default = withNavigation;
exports.default = _default;
//# sourceMappingURL=withNavigation.js.map