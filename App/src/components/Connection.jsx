import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import {Dimensions} from 'react-native';

import { useState } from 'react'

export function Connection() {



    const [open, close] = useState(close)
    console.log(open)

    return (
        <>
            <View style={ConnectionStyle.connectionContainer}>
                <Text style={ConnectionStyle.connectionText}>Disconnected</Text>
            </View>
            
            <TouchableOpacity style={ConnectionStyle.connectionButton}>

            </TouchableOpacity>
        </>
    )
}

//TODO: ALL THE DESIGN

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
    heart: {
        width: 100,
        height: 100,
    },

    connectionText: {
        fontSize: 40,
        letterSpacing: 2.5,
        fontFamily: 'Butterscotch'
    },

    connectionButton: {

        height: 75,
        backgroundColor: '#fff',
        bottom: 0,
        borderTopRightRadius: connectionButtonRadius,
        borderTopLeftRadius: connectionButtonRadius,
        width: deviceWidth
    }
})