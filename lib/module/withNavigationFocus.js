function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { useIsFocused } from '@react-navigation/native';
import useCompatNavigation from './useCompatNavigation';

/**
 * Injects the wrapped component with the `isFocused` and `navigation` props using the React Navigation 4.x API contract.
 * @deprecated Consume a combination of `useNavgation()` and `useIsFocused()` instead to be fully compatible with React Navigation 6.x!
 * @param Component The component to be wrapped.
 * @returns The wrapped component with `isFocused` and `navigation` props passed to it.
 */
const withNavigationFocus = Component => {
  //#endregion
  const componentDisplayName = Component.displayName || Component.name;
  const WrappedComponent = Component;
  const wrappedComponentDisplayName = "withNavigation(".concat(componentDisplayName, ")");

  const ComponentWithNavigationFocus = props => {
    const isFocused = useIsFocused();
    const navigation = useCompatNavigation();
    return (
      /*#__PURE__*/
      // @ts-expect-error: type checking HOC is hard
      // if we hadn't override the built-in ref with our custom onRef (official API since v4!!!), this
      // would've been fine without bypassing the type checking. unfortunately, v4 & v5/compat spec is
      // like this, so, the bypass has to stay to maintain full backwards compatibility...
      React.createElement(WrappedComponent, _extends({}, props, {
        ref: props.onRef,
        isFocused: isFocused,
        navigation: navigation
      }))
    );
  };

  hoistNonReactStatics(ComponentWithNavigationFocus, Component);
  ComponentWithNavigationFocus.displayName = wrappedComponentDisplayName; // 1. Inject HOC-specific props.
  // 2. Retain C-specific props.
  // 3. Retain C-specific statics.

  //#endregion
  return ComponentWithNavigationFocus;
};

export default withNavigationFocus;
//# sourceMappingURL=withNavigationFocus.js.map