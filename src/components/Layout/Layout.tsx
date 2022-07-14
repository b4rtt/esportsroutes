import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

export default function Layout({ children }: any) {
    return (
        <View
            style={{
                flex: 1
            }}
        >
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {}
});
