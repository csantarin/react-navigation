function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable prettier/prettier */
import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import useCompatNavigation from './useCompatNavigation';

const withNavigation = Component => {
  //#endregion
  const componentDisplayName = Component.displayName || Component.name;
  const WrappedComponent = Component;
  const wrappedComponentDisplayName = "withNavigation(".concat(componentDisplayName, ")");

  const NavigationComponent = props => {
    const navigation = useCompatNavigation();
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

  hoistNonReactStatics(NavigationComponent, Component);
  NavigationComponent.displayName = wrappedComponentDisplayName; // 1. Inject HOC-specific props.
  // 2. Retain C-specific props.
  // 3. Retain C-specific statics.

  //#endregion
  return NavigationComponent;
};

export default withNavigation;
//# sourceMappingURL=withNavigation.js.map