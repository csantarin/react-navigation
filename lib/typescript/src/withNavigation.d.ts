import * as React from 'react';
import type { NavigationParams } from './types';
declare const withNavigation: <C extends React.JSXElementConstructor<{}>, NP extends NavigationParams = NavigationParams>(Component: C) => C extends React.ComponentClass<{}, any> ? C & React.ComponentClass<React.ComponentProps<C> & {
    /**
     * **NOTE**: Overriden by `.onRef` prop. Do not use `.ref`.
     *           As per official React Navigation 5 API, use `.onRef` instead!
     */
    ref?: undefined;
    /**
     * Forwards ref to the wrapped component.
     */
    onRef?: (C extends React.ComponentClass<{}, any> ? React.LegacyRef<InstanceType<C>> : C extends React.MemoExoticComponent<React.ForwardRefExoticComponent<{}>> ? ((instance: React.ElementRef<C> | null) => void) | React.RefObject<React.ElementRef<C>> | null | undefined : C extends React.MemoExoticComponent<(props: {}) => React.ReactElement | null> ? never : C extends React.ForwardRefExoticComponent<{}> ? ((instance: React.ElementRef<C> | null) => void) | React.RefObject<React.ElementRef<C>> | null | undefined : C extends React.NamedExoticComponent<{}> ? never : C extends (props: {}) => React.ReactElement | null | undefined ? never : never) | undefined;
}, any> : C extends React.MemoExoticComponent<React.ForwardRefExoticComponent<{}>> ? React.NamedExoticComponent<React.PropsWithRef<React.ComponentProps<C> & {
    /**
     * **NOTE**: Overriden by `.onRef` prop. Do not use `.ref`.
     *           As per official React Navigation 5 API, use `.onRef` instead!
     */
    ref?: undefined;
    /**
     * Forwards ref to the wrapped component.
     */
    onRef?: (C extends React.ComponentClass<{}, any> ? React.LegacyRef<InstanceType<C>> : C extends React.MemoExoticComponent<React.ForwardRefExoticComponent<{}>> ? ((instance: React.ElementRef<C> | null) => void) | React.RefObject<React.ElementRef<C>> | null | undefined : C extends React.MemoExoticComponent<(props: {}) => React.ReactElement | null> ? never : C extends React.ForwardRefExoticComponent<{}> ? ((instance: React.ElementRef<C> | null) => void) | React.RefObject<React.ElementRef<C>> | null | undefined : C extends React.NamedExoticComponent<{}> ? never : C extends (props: {}) => React.ReactElement | null | undefined ? never : never) | undefined;
}>> & {
    readonly type: (props: React.ComponentProps<C> & {
        /**
         * **NOTE**: Overriden by `.onRef` prop. Do not use `.ref`.
         *           As per official React Navigation 5 API, use `.onRef` instead!
         */
        ref?: undefined;
        /**
         * Forwards ref to the wrapped component.
         */
        onRef?: (C extends React.ComponentClass<{}, any> ? React.LegacyRef<InstanceType<C>> : C extends React.MemoExoticComponent<React.ForwardRefExoticComponent<{}>> ? ((instance: React.ElementRef<C> | null) => void) | React.RefObject<React.ElementRef<C>> | null | undefined : C extends React.MemoExoticComponent<(props: {}) => React.ReactElement | null> ? never : C extends React.ForwardRefExoticComponent<{}> ? ((instance: React.ElementRef<C> | null) => void) | React.RefObject<React.ElementRef<C>> | null | undefined : C extends React.NamedExoticComponent<{}> ? never : C extends (props: {}) => React.ReactElement | null | undefined ? never : never) | undefined;
    }) => ReturnType<C>;
} & Pick<C, keyof C> : C extends React.MemoExoticComponent<(props: {}) => React.ReactElement | null> ? C : C extends React.ForwardRefExoticComponent<{}> ? React.ForwardRefExoticComponent<React.ComponentProps<C> & {
    /**
     * **NOTE**: Overriden by `.onRef` prop. Do not use `.ref`.
     *           As per official React Navigation 5 API, use `.onRef` instead!
     */
    ref?: undefined;
    /**
     * Forwards ref to the wrapped component.
     */
    onRef?: (C extends React.ComponentClass<{}, any> ? React.LegacyRef<InstanceType<C>> : C extends React.MemoExoticComponent<React.ForwardRefExoticComponent<{}>> ? ((instance: React.ElementRef<C> | null) => void) | React.RefObject<React.ElementRef<C>> | null | undefined : C extends React.MemoExoticComponent<(props: {}) => React.ReactElement | null> ? never : C extends React.ForwardRefExoticComponent<{}> ? ((instance: React.ElementRef<C> | null) => void) | React.RefObject<React.ElementRef<C>> | null | undefined : C extends React.NamedExoticComponent<{}> ? never : C extends (props: {}) => React.ReactElement | null | undefined ? never : never) | undefined;
}> & Pick<C, keyof C> : C extends React.NamedExoticComponent<{}> ? C : C extends (props: {}) => React.ReactElement | null | undefined ? C : C;
export default withNavigation;
