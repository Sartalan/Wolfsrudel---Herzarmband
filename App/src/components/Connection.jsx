import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native'
import {Dimensions} from 'react-native';

import { useState } from 'react'

export function Connection() {

    const [connection, setConnection ] = useState('Disconnected ●︿●')

    function press() {
            setConnection(connection === 'Disconnected ●︿●' ? 'Connected ( ͡° ͜ʖ ͡°)' : 'Disconnected ●︿●')

    }


    return (
        <>
            <View style={ConnectionStyle.connectionContainer}>
                <Text style={ConnectionStyle.connectionText}>{connection}</Text>
            </View>
            
            <TouchableOpacity style={ConnectionStyle.connectionButton} onPress={press} >
                <Image style={ConnectionStyle.bleImage} source={require('../../assets/bluetooth.png')}/>
            </TouchableOpacity>
        </>
    )
}

//TODO: ALL THE DESIGN
//TODO: ---------------------------

const deviceWidth = Dimensions.get('window').width;
const connectionButtonRadius = 30;
const ConnectionStyle = StyleSheet.create({

    connectionContainer: {
        backgroundColor: '#74F2CE',
        width: 350,
        height: 150,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    
    connectionText: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'console'
    },

    connectionButton: {
        padding: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: connectionButtonRadius,
        borderTopLeftRadius: connectionButtonRadius,
        width: deviceWidth
    },
    bleImage: {
        width: 75,
        height: 75,
    }
})