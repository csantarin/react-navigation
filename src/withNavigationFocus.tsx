import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { NavigationProp, useIsFocused } from '@react-navigation/native';
import useCompatNavigation from './useCompatNavigation';
import type { NavigationFocusInjectedProps, NavigationParams } from './types';

/**
 * Injects the wrapped component with the `isFocused` and `navigation` props using the React Navigation 4.x API contract.
 * @deprecated Consume a combination of `useNavgation()` and `useIsFocused()` instead to be fully compatible with React Navigation 6.x!
 * @param Component The component to be wrapped.
 * @returns The wrapped component with `isFocused` and `navigation` props passed to it.
 */
const withNavigationFocus = <
  C extends React.JSXElementConstructor<any>,
  NP extends NavigationParams = NavigationParams,
>(
  Component: C
) => {
  type Props = React.ComponentProps<C>;
  type OnRef
    //#region OnRef exhaustive types...
    // class Screen extends React.Component {}
    = C extends React.ComponentClass<any>
      ? React.LegacyRef<InstanceType<C>>

    // const Screen = React.memo(React.forwardRef((props, ref) => <></>));
    : C extends React.MemoExoticComponent<React.ForwardRefExoticComponent<any>>
      ? React.RefAttributes<React.ElementRef<C>>['ref']

    // const Screen = React.memo((props) => <></>);
    : C extends React.MemoExoticComponent<(props: any) => React.ReactElement | null>
      ? never

    // const Screen = React.forwardRef((props, ref) => <></>);
    : C extends React.ForwardRefExoticComponent<any>
      ? React.RefAttributes<React.ElementRef<C>>['ref']

    // const Screen = React.memo(((props, ref) => <></>) as React.FunctionComponent);
    : C extends React.NamedExoticComponent<any>
      ? never

    // const Screen = (props) => <></>;
    : C extends (props: any) => React.ReactElement | React.ReactNode | null | undefined
      ? never

    // const Screen: React.FunctionComponent = (props) => <></>;
    : C extends React.FunctionComponent<any>
      ? never

    // unknown
    : never;
    //#endregion

  type RefProps = {
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
  type WrappedProps = Omit<Props, keyof NavigationFocusInjectedProps> & RefProps;
  type WrappedPInternal = WrappedProps & NavigationFocusInjectedProps;

  const componentDisplayName = (Component as React.ComponentType<WrappedProps>).displayName || Component.name;
  const WrappedComponent = Component as unknown as React.ComponentType<WrappedPInternal>;
  const wrappedComponentDisplayName = `withNavigation(${componentDisplayName})`;

  const ComponentWithNavigationFocus = (props: WrappedProps) => {
    const isFocused = useIsFocused();
    const navigation = useCompatNavigation<NavigationProp<NP>>();

    return (
      // @ts-expect-error: type checking HOC is hard
      // if we hadn't override the built-in ref with our custom onRef (official API since v4!!!), this
      // would've been fine without bypassing the type checking. unfortunately, v4 & v5/compat spec is
      // like this, so, the bypass has to stay to maintain full backwards compatibility...
      <WrappedComponent
        {...props}
        ref={props.onRef}
        isFocused={isFocused}
        navigation={navigation}
      />
    );
  };

  hoistNonReactStatics(ComponentWithNavigationFocus, Component);

  ComponentWithNavigationFocus.displayName = wrappedComponentDisplayName;

   // 1. Inject HOC-specific props.
   // 2. Retain C-specific props.
   // 3. Retain C-specific statics.
  type WithStatics<T> = T & Pick<C, keyof C>;
  type NavigationComponentType
    //#region NavigationComponentType exhaustive types...
    // class Screen extends React.Component {}
    = C extends React.ComponentClass<any>
      ? WithStatics<React.ComponentClass<Omit<Props, keyof NavigationFocusInjectedProps> & RefProps>>

    // const Screen = React.memo(React.forwardRef((props, ref) => <></>));
    : C extends React.MemoExoticComponent<React.ForwardRefExoticComponent<any>>
      ? WithStatics<React.MemoExoticComponent<(props: Omit<Props, keyof NavigationFocusInjectedProps> & RefProps) => ReturnType<C>>>

    // const Screen = React.memo((props) => <></>);
    : C extends React.MemoExoticComponent<(props: any) => React.ReactElement | null>
      ? WithStatics<React.MemoExoticComponent<(props: Omit<Props, keyof NavigationFocusInjectedProps> & RefProps) => ReturnType<C>>>

    // const Screen = React.forwardRef((props, ref) => <></>);
    : C extends React.ForwardRefExoticComponent<any>
      ? WithStatics<React.ForwardRefExoticComponent<Omit<Props, keyof NavigationFocusInjectedProps> & RefProps>>

    // const Screen = React.memo(((props, ref) => <></>) as React.FunctionComponent);
    : C extends React.NamedExoticComponent<any>
      ? WithStatics<React.NamedExoticComponent<(props: Omit<Props, keyof NavigationFocusInjectedProps> & RefProps) => ReturnType<C>>>

    // const Screen = (props) => <></>;
    : C extends (props: any) => React.ReactElement | React.ReactNode | null | undefined
      ? WithStatics<(props: Omit<Props, keyof NavigationFocusInjectedProps>) => ReturnType<C>>

    // const Screen: React.FunctionComponent = (props) => <></>;
    : C extends React.FunctionComponent<any>
      ? WithStatics<React.FunctionComponent<Omit<Props, keyof NavigationFocusInjectedProps>>>

    // unknown
    : C;
    //#endregion

   return ComponentWithNavigationFocus as NavigationComponentType;
};

export default withNavigationFocus;
