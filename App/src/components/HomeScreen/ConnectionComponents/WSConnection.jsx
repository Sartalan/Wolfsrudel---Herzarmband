

import { TextInput, View, Text, StyleSheet } from "react-native"

export function WSConnection() {
    return (
        <>
            <Text style={WSConnectionStyle.text}>WS Server IP</Text>
            <View style={WSConnectionStyle.inputContainer}>
                <TextInput
                    placeholderTextColor='rgba(100,100,100,0.75)'
                    placeholder='Example: 10.0.10.5:8080'
                    maxLength={30}
                    style={WSConnectionStyle.input} />
            </View>
        </>
    )
}

const WSConnectionStyle = StyleSheet.create({

    //? ---------- WIFI -------------

    text: {
        fontSize: 40,
        fontStyle: 'italic',
        opacity: .75,
        color: '#fff'
    },

    inputContainer: {
        padding: 10,
        margin: 10,
        width: 300,
        borderRadius: 10,
        backgroundColor: '#fff'
    },

    modalInput: {
        color: '#000',
        fontSize: 20
    }
})