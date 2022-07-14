import React, { useEffect, useCallback, useState } from 'react';
import { View, Platform } from 'react-native';
import * as Updates from 'expo-updates';

import Main from './src/main';

export default function App() {
    useEffect(() => {
        checkUpdate();
    }, []);

    const checkUpdate = async () => {
        try {
            const update = await Updates.checkForUpdateAsync();
            if (update.isAvailable) {
                console.log('JE UPDATE');
                appUpdate();
            } else {
                console.log('NENI UPDATE');
            }
        } catch (e) {
            console.log('Update fail', e);
        }
    };

    const appUpdate = async () => {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
    };

    return <Main />;
}
