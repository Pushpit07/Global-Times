import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, TouchableWithoutFeedback } from 'react-native';

export default function Homepage({ navigation }) {
    const [dataLoading, finishLoading] = useState(true);
    const [newsData, setData] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tech&apiKey=be70992148884b16a62c6bccd6740086')
            .then((response) => response.json())
            .then((json) => setData(json.articles))
            .catch((error) => console.error(error))
            .finally(() => finishLoading(false));
    }, []);

    const storyItem = ({ item }) => {
        return (
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate('NewsDetail', { url: item.url })}
            >
                <View style={styles.listings}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Image
                        style={styles.thumbnail}
                        source={{ uri: item.urlToImage }}
                    />
                    <Text style={styles.blurb}>{item.description}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    };

    return (
        <View style={styles.container}>
            {dataLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={newsData}
                    renderItem={storyItem}
                    keyExtractor={(item) => item.url}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcf4eb',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
    },
    thumbnail: {
        height: 100,
        width: '98%',
    },
    listings: {
        paddingTop: 25,
        paddingBottom: 30,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    title: {
        paddingBottom: 15,
        fontFamily: 'OpenSans',
        fontWeight: 'bold'
    },
    blurb: {
        paddingTop: 10,
        fontFamily: 'OpenSans',
        fontStyle: 'italic'
    }
});