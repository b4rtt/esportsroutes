import React from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';

import { colors, images } from '../../theme';

export default function Loading({}) {
    return (
        <View style={styles.loader}>
            <View
                style={{
                    width: 119,
                    height: 97,
                    borderRadius: 8,
                    backgroundColor: 'rgba(135, 141, 150, 0.9)',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text
                    style={{
                        fontSize: 14,
                        fontStyle: 'normal',
                        lineHeight: 18,
                        letterSpacing: 0,
                        textAlign: 'center',
                        color: colors.black,
                        textTransform: 'uppercase',
                        marginTop: 8
                    }}
                >
                    Nahrávám
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    loader: {
        position: 'absolute',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
