import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function QuotePage() {
    const [name, nameChange] = useState('');
    const [email, emailChange] = useState('');
    const [phone, phoneChange] = useState('');
    const [message, messageChange] = useState('');
    const [submitError, setError] = useState(false);
    const [submitted, trySubmit] = useState(false);

    const postMessage = () => {
        if (!name | !email | !message) {
            setError(true);
        } else {
            setError(false);
            trySubmit(true);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                {submitError ?
                    <Text style={styles.status}>
                        You didn't enter a name, email, or message
                    </Text>
                    :
                    <Text style={styles.status}>
                        Please enter the requested information
                    </Text>
                }
                {submitted ?
                    <Text>
                        Name: {name} Email: {email}
                    </Text>
                    :
                    <Text style={styles.req}>* required</Text>
                }

                <Text style={styles.label}>Name *</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => nameChange(text)}
                    value={name}
                />

                <Text style={styles.label}>Email *</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => emailChange(text)}
                    value={email}
                />

                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => phoneChange(text)}
                    value={phone}
                />

                <Text style={styles.label}>Message *</Text>
                <TextInput
                    style={styles.multi}
                    onChangeText={text => messageChange(text)}
                    value={message}
                    multiline
                    numberOfLines={6}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => postMessage()}
                >
                    <Text>Submit Quote</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fcf4eb',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    input: {
        height: 35,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        fontSize: 26,
        fontFamily: 'OpenSans',
        width: 250,
    },
    label: {
        fontSize: 18,
        fontFamily: 'OpenSans',
        paddingTop: 20,
        paddingBottom: 10,
        fontWeight: 'bold',
    },
    req: {
        fontFamily: 'OpenSans',
        paddingTop: 10,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    multi: {
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        fontSize: 16,
        fontFamily: 'OpenSans',
        width: 300,
    },
    button: {
        marginLeft: 125,
        marginRight: 'auto',
        marginTop: 40,
        paddingLeft: 17,
        paddingRight: 17,
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: 777777,
        borderRadius: 5,
    },
    status: {
        paddingTop: 40,
        paddingBottom: 15,
        fontSize: 18,
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
    }
})