import * as React from 'react';
import type { NavigationInjectedProps, NavigationParams } from './types';
/**
 * Injects the wrapped component with the `navigation` prop using the React Navigation 4.x API contract.
 * @deprecated Consume `useNavgation()` instead to be fully compatible with React Navigation 6.x!
 * @param Component The component to be wrapped.
 * @returns The wrapped component with `navigation` prop passed to it.
 */
declare const withNavigation: <C extends React.JSXElementConstructor<any>, NP extends NavigationParams = NavigationParams>(Component: C) => C extends React.ComponentClass<any, any> ? React.ComponentClass<Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "navigation">> & {
    /**
    * **NOTE**: Overriden by `.onRef` prop. Do not use `.ref`.
    *           As per official React Navigation 5 API, use `.onRef` instead!
    */
    ref?: undefined;
    /**
    * Forwards ref to the wrapped component.
    */
    onRef?: (C extends React.ComponentClass<any, any> ? React.LegacyRef<InstanceType<C>> : C extends React.MemoExoticComponent<React.ForwardRefExoticComponent<any>> ? ((instance: React.ElementRef<C> | null) => void) | React.RefObject<React.ElementRef<C>> | null | undefined : C extends React.MemoExoticComponent<(props: any) => React.ReactElement | null> ? never : C extends React.ForwardRefExoticComponent<any> ? ((instance: React.ElementRef<C> | null) => void) | React.RefObject<React.ElementRef<C>> | null | undefined : C extends React.NamedExoticComponent<any> ? never : C extends (props: any) => React.ReactElement | React.ReactNode | null | undefined ? never : C extends React.FunctionComponent<any> ? never : never) | undefined;
}, any> & Pick<C, keyof C> : C extends React.MemoExoticComponent<React.ForwardRefExoticComponent<any>> ? React.NamedExoticComponent<React.PropsWithRef<Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "navigation">> & {
    /**
    * **NOTE**: Overriden by `.onRef` prop. Do not use `.ref`.
    *           As per official React Navigation 5 API, use `.onRef` instead!
    */
    ref?: undefined;
    /**
    * Forwards ref to the wrapped component.
    */
    onRef?: (C extends React.ComponentClass<any, any> ? React.LegacyRef<InstanceType<C>> : C extends React.MemoExoticComponent<React.ForwardRefExoticComponent<any>> ? ((instance: React.ElementRef<C> | null) => void) | React.RefObject<React.ElementRef<C>> | null | undefined : C extends React.MemoExoticComponent<(props: any) => React.ReactElement | null> ? never : C extends React.ForwardRefExoticComponent<any> ? ((instance: React.ElementRef<C> | null) => void) | React.RefObject<React.ElementRef<C>> | null | undefined : C extends React.NamedExoticComponent<any> ? never : C extends (props: any) => React.ReactElement | React.ReactNode | null | undefined ? never : C extends React.FunctionComponent<any> ? never : never) | undefined;
}>> & {
    readonly type: (props: Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "navigation">> & {
        /**
        * **NOTE**: Overriden by `.onRef` prop. Do not use `.ref`.
        *           As per official React Navigation 5 API, use `.onRef` instead!
        */
        ref?: undefined;
        /**
        * Forwards ref to the wrapped component.
        */
        onRef?: (C extends React.ComponentClass<any, any> ? React.LegacyRef<InstanceType<C>> : C extends React.MemoExoticComponent<React.ForwardRefExoticComponent<any>> ? ((instance: React.ElementRef<C> | null) => void) | React.RefObject<React.ElementRef<C>> | null | undefined : C extends React.MemoExoticComponent<(props: any) => React.ReactElement | null> ? never : C extends React.ForwardRefExoticComponent<any> ? ((instance: React.ElementRef<C> | null) => void) | React.RefObject<React.ElementRef<C>> | null | undefined : C extends React.NamedExoticComponent<any> ? never : C extends (props: any) => React.ReactElement | React.ReactNode | null | undefined ? never : C extends React.FunctionComponent<any> ? never : never) | undefined;
    }) => ReturnType<C>;
} & Pick<C, keyof C> : C extends React.MemoExoticComponent<(props: any) => React.ReactElement | null> ? React.NamedExoticComponent<React.PropsWithRef<Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "navigation">> & {
    /**
    * **NOTE**: Overriden by `.onRef` prop. Do not use `.ref`.
    *           As per official React Navigation 5 API, use `.onRef` instead!
    */
    ref?: undefined;
    /**
    * Forwards ref to the wrapped component.
    */
    onRef?: (C extends React.ComponentClass<any, any> ? React.LegacyRef<InstanceType<C>> : C extends React.MemoExoticComponent<React.ForwardRefExoticComponent<any>> ? ((instance: React.ElementRef<C> | null) => void) | React.RefObject<React.ElementRef<C>> | null | undefined : C extends React.MemoExoticComponent<(props: any) => React.ReactElement | null> ? never : C extends React.ForwardRefExoticComponent<any> ? ((instance: React.ElementRef<C> | null) => void) | React.RefObject<React.ElementRef<C>> | null | undefined : C extends React.NamedExoticComponent<any> ? never : C extends (props: any) => React.ReactElement | React.ReactNode | null | undefined ? never : C extends React.FunctionComponent<any> ? never : never) | undefined;
}>> & {
    readonly type: (props: Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "navigation">> & {
        /**
        * **NOTE**: Overriden by `.onRef` prop. Do not use `.ref`.
        *           As per official React Navigation 5 API, use `.onRef` instead!
        */
        ref?: undefined;
        /**
        * Forwards ref to the wrapped component.
        */
        onRef?: (C extends React.ComponentClass<any, any> ? React.LegacyRef<InstanceType<C>> : C extends React.MemoExoticComponent<React.ForwardRefExoticComponent<any>> ? ((instance: React.ElementRef<C> | null) => void) | React.RefObject<React.ElementRef<C>> | null | undefined : C extends React.MemoExoticComponent<(props: any) => React.ReactElement | null> ? never : C extends React.ForwardRefExoticComponent<any> ? ((instance: React.ElementRef<C> | null) => void) | React.RefObject<React.ElementRef<C>> | null | undefined : C extends React.NamedExoticComponent<any> ? never : C extends (props: any) => React.ReactElement | React.ReactNode | null | undefined ? never : C extends React.FunctionComponent<any> ? never : never) | undefined;
    }) => ReturnType<C>;
} & Pick<C, keyof C> : C extends React.ForwardRefExoticComponent<any> ? React.ForwardRefExoticComponent<Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "navigation">> & {
    /**
    * **NOTE**: Overriden by `.onRef` prop. Do not use `.ref`.
    *           As per official React Navigation 5 API, use `.onRef` instead!
    */
    ref?: undefined;
    /**
    * Forwards ref to the wrapped component.
    */
    onRef?: (C extends React.ComponentClass<any, any> ? React.LegacyRef<InstanceType<C>> : C extends React.MemoExoticComponent<React.ForwardRefExoticComponent<any>> ? ((instance: React.ElementRef<C> | null) => void) | React.RefObject<React.ElementRef<C>> | null | undefined : C extends React.MemoExoticComponent<(props: any) => React.ReactElement | null> ? never : C extends React.ForwardRefExoticComponent<any> ? ((instance: React.ElementRef<C> | null) => void) | React.RefObject<React.ElementRef<C>> | null | undefined : C extends React.NamedExoticComponent<any> ? never : C extends (props: any) => React.ReactElement | React.ReactNode | null | undefined ? never : C extends React.FunctionComponent<any> ? never : never) | undefined;
}> & Pick<C, keyof C> : C extends React.NamedExoticComponent<any> ? React.NamedExoticComponent<(props: Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "navigation">> & {
    /**
    * **NOTE**: Overriden by `.onRef` prop. Do not use `.ref`.
    *           As per official React Navigation 5 API, use `.onRef` instead!
    */
    ref?: undefined;
    /**
    * Forwards ref to the wrapped component.
    */
    onRef?: (C extends React.ComponentClass<any, any> ? React.LegacyRef<InstanceType<C>> : C extends React.MemoExoticComponent<React.ForwardRefExoticComponent<any>> ? ((instance: React.ElementRef<C> | null) => void) | React.RefObject<React.ElementRef<C>> | null | undefined : C extends React.MemoExoticComponent<(props: any) => React.ReactElement | null> ? never : C extends React.ForwardRefExoticComponent<any> ? ((instance: React.ElementRef<C> | null) => void) | React.RefObject<React.ElementRef<C>> | null | undefined : C extends React.NamedExoticComponent<any> ? never : C extends (props: any) => React.ReactElement | React.ReactNode | null | undefined ? never : C extends React.FunctionComponent<any> ? never : never) | undefined;
}) => ReturnType<C>> & Pick<C, keyof C> : C extends (props: any) => React.ReactElement | React.ReactNode | null | undefined ? ((props: Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "navigation">>) => ReturnType<C>) & Pick<C, keyof C> : C extends React.FunctionComponent<any> ? React.FunctionComponent<Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "navigation">>> & Pick<C, keyof C> : C;
export default withNavigation;
