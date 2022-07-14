import * as React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef>();

import { CommonActions, StackActions } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
export const Stack = createStackNavigator();

export function navigate(name: string, clearHistory?: boolean, params?: any) {
    if (clearHistory) {
        navigationRef.current?.dispatch({
            ...CommonActions.reset({
                index: 0,
                routes: [{ name, params }]
            })
        });
    } else {
        navigationRef.current?.navigate(name, params);
    }
}

export function navigateSamePage(name: string, params?: any) {
    const pushAction = StackActions.push(name, params);
    navigationRef.current?.dispatch(pushAction);
}

export function getCurrentRoute() {
    return navigationRef.current?.getCurrentRoute()?.name;
}

export function goBack() {
    if (canGoBack()) navigationRef.current?.goBack();
}

export function canGoBack() {
    return navigationRef.current?.canGoBack();
}
