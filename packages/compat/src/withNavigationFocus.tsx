/* eslint-disable prettier/prettier */
import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { NavigationProp, useIsFocused } from '@react-navigation/native';
import useCompatNavigation from './useCompatNavigation';
import type { NavigationParams } from './types';

const withNavigation = <
  C extends React.JSXElementConstructor<{}>,
  NP extends NavigationParams = NavigationParams
>(
  Component: C
) => {
  type P = React.ComponentProps<C>;
  type OnRef
    = C extends React.ComponentClass<{}>
      ? React.LegacyRef<InstanceType<C>>
    : C extends React.MemoExoticComponent<React.ForwardRefExoticComponent<{}>>
      ? React.RefAttributes<React.ElementRef<C>>['ref']
    : C extends React.MemoExoticComponent<(props: {}) => React.ReactElement | null>
      ? never
    : C extends React.ForwardRefExoticComponent<{}>
      ? React.RefAttributes<React.ElementRef<C>>['ref']
    : C extends React.NamedExoticComponent<{}>
      ? never
    : C extends (props: {}) => React.ReactElement | null | undefined
      ? never
    : never;
  type WrappedP = P & {
    /**
     * **NOTE**: Overriden by `.onRef` prop. Do not use `.ref`.
     *           As per official React Navigation 5 API, use `.onRef` instead!
     */
    ref?: never;
    /**
     * Forwards ref to the wrapped component.
     */
    onRef?: OnRef;
  };

  const componentDisplayName = (Component as React.ComponentType<WrappedP>).displayName || Component.name;
  const WrappedComponent = Component as unknown as React.ComponentType<WrappedP>;
  const wrappedComponentDisplayName = `withNavigation(${componentDisplayName})`;

  const NavigationComponent = (props: WrappedP) => {
    const isFocused = useIsFocused();
    const navigation = useCompatNavigation<NavigationProp<NP>>();

    return (
    // @ts-expect-error: type checking HOC is hard
    // if we hadn't override the built-in ref with our custom onRef (official API since v4!!!), this
    // would've been fine without bypassing the type checking. unfortunately, v4 & v5/compat spec is
    // like this, so, the bypass has to stay to ease the implementation...
      <WrappedComponent
        {...props}
        ref={props.onRef}
        isFocused={isFocused}
        navigation={navigation}
      />
    );
  };

  hoistNonReactStatics(NavigationComponent, Component);

  NavigationComponent.displayName = wrappedComponentDisplayName;

  // 1. Inject HOC-specific props.
  // 2. Retain C-specific props.
  // 3. Retain C-specific statics.
  type WithStatics<T> = T & Pick<C, keyof C>;
  type NavigationComponentType
    = C extends React.ComponentClass<{}>
      ? C & React.ComponentClass<WrappedP>
    : C extends React.MemoExoticComponent<React.ForwardRefExoticComponent<{}>>
      ? WithStatics<React.MemoExoticComponent<(props: WrappedP) => ReturnType<C>>>
    : C extends React.MemoExoticComponent<(props: {}) => React.ReactElement | null>
      ? C
    : C extends React.ForwardRefExoticComponent<{}>
      ? WithStatics<React.ForwardRefExoticComponent<WrappedP>>
    : C extends React.NamedExoticComponent<{}>
      ? C
    : C extends (props: {}) => React.ReactElement | null | undefined
      ? C
    : C;

  return NavigationComponent as NavigationComponentType;
};

export default withNavigation;
