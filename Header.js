import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from './assets/globalTimes.png';

export default function Header(props) {
    return (
        <View style={styles.header}>
            <Image source={logo} style={{ width: 50, height: 50, top: 25, left: 10 }} />
            <View>
                <Text style={styles.text}>{props.headerDisplay}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 85,
        backgroundColor: 180304
    },
    text: {
        fontFamily: 'OpenSans',
        fontSize: 20,
        position: 'absolute',
        color: '#fcf4eb',
        fontWeight: "700",
        top: -3,
        left: 50
    }
})