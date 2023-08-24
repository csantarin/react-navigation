import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { NavigationProp, ParamListBase, useIsFocused } from '@react-navigation/native';
import useCompatNavigation from './useCompatNavigation';
import type { CompatNavigationProp } from './types';

type InjectedProps<T extends NavigationProp<ParamListBase>> = {
  isFocused: boolean;
  navigation: CompatNavigationProp<T>;
};

export default function withNavigationFocus<
  T extends NavigationProp<ParamListBase>,
  P extends InjectedProps<T>,
  C extends React.ComponentType<P>
>(Comp: C) {
  const WrappedComponent = ({
    onRef,
    ...rest
  }: Exclude<P, InjectedProps<T>> & {
    onRef?: C extends React.ComponentClass<any>
      ? React.Ref<InstanceType<C>>
      : never;
  }): React.ReactElement => {
    const isFocused = useIsFocused();
    const navigation = useCompatNavigation<T>();

    // @ts-expect-error: type checking HOC is hard
    return <Comp ref={onRef} isFocused={isFocused} navigation={navigation} {...rest} />;
  };

  WrappedComponent.displayName = `withNavigationFocus(${
    Comp.displayName || Comp.name
  })`;

  hoistNonReactStatics(WrappedComponent, Comp);

  return WrappedComponent;
}
