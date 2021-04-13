import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as RootNavigation from './RootNavigation';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate('GlobalTimes')}
            >
                <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate('About')}
            >
                <Text style={styles.buttonText}>About</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate('Quote')}
            >
                <Text style={styles.buttonText}>Quote</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 60,
        backgroundColor: 180304,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    button: {
        paddingTop: 20,
        paddingBottom: 25,
        paddingLeft: 40,
        paddingRight: 40,
    },
    buttonText: {
        color: 999099,
    }
})