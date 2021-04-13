import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import imageA from './assets/globeNews.png';
import imageB from './assets/news.jpg';

const blockA = `Global News is a news aggregator service developed by Global Technologies. It presents a continuous flow of links to articles organized from thousands of publishers and magazines. Global News is available as an app on Android, iOS, and the Web.`;

const blockB = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export default function AboutGlobal() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Image source={imageA} style={{ width: '100%', height: 300 }} />
                <Text style={styles.heading}>We are different</Text>
                <Text style={styles.text}>{blockA}</Text>
                <Image source={imageB} style={{ width: '100%', height: 200 }} />
                <Text style={styles.heading}>Leaders in our fields</Text>
                <Text style={styles.text}>{blockB}</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    heading: {
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
        fontSize: 22,
        paddingTop: 30,
        paddingLeft: 15
    },
    text: {
        fontFamily: 'OpenSans',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        paddingBottom: 35,
    }
})