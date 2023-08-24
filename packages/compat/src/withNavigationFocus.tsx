/* eslint-disable prettier/prettier */
import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { NavigationProp, useIsFocused } from '@react-navigation/native';
import useCompatNavigation from './useCompatNavigation';
import type { NavigationParams, NavigationFocusInjectedProps } from './types';

const withNavigation = <
  C extends React.ComponentType<{}>,
  NP extends NavigationParams = NavigationParams
>(
  Component: C
) => {
  type WrappedP = React.ComponentProps<C> & NavigationFocusInjectedProps;

  const componentDisplayName = Component.displayName || Component.name;
  const WrappedComponent = Component as unknown as React.ComponentType<WrappedP>;
  const wrappedComponentDisplayName = `withNavigation(${componentDisplayName})`;

  const NavigationComponent = React.forwardRef<C, WrappedP>((props, ref) => {
    const isFocused = useIsFocused();
    const navigation = useCompatNavigation<NavigationProp<NP>>();

    return (
    // @ts-expect-error: type checking HOC is hard
      <WrappedComponent
        {...props}
        ref={ref}
        isFocused={isFocused}
        navigation={navigation}
      />
    );
  });

  hoistNonReactStatics(NavigationComponent, Component);

  NavigationComponent.displayName = wrappedComponentDisplayName;

  return NavigationComponent;
};

export default withNavigation;


