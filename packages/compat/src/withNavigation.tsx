/* eslint-disable prettier/prettier */
import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import type { NavigationProp } from '@react-navigation/native';
import useCompatNavigation from './useCompatNavigation';
import type { NavigationParams, NavigationInjectedProps } from './types';

const withNavigation = <
  C extends React.ComponentType<{}>,
  NP extends NavigationParams = NavigationParams
>(
  Component: C
) => {
  type WrappedP = React.ComponentProps<C> & NavigationInjectedProps<NP>;

  const componentDisplayName = Component.displayName || Component.name;
  const WrappedComponent = Component as unknown as React.ComponentType<WrappedP>;
  const wrappedComponentDisplayName = `withNavigation(${componentDisplayName})`;

  const NavigationComponent = React.forwardRef<C, WrappedP>((props, ref) => {
    const navigation = useCompatNavigation<NavigationProp<NP>>();

    return (
    // @ts-expect-error: type checking HOC is hard
      <WrappedComponent
        {...props}
        ref={ref}
        navigation={navigation}
      />
    );
  });

  hoistNonReactStatics(NavigationComponent, Component);

  NavigationComponent.displayName = wrappedComponentDisplayName;

  return NavigationComponent;
};

export default withNavigation;
