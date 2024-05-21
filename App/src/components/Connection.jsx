import { Text, TouchableOpacity, View, StyleSheet, Image, Modal } from 'react-native'
import { Dimensions } from 'react-native';

import { useState } from 'react'

export function Connection() {

    //  const [connection, setConnection ] = useState('Disconnected ●︿●')
    const [modal, setModal] = useState(false)

    function press() {
        // setConnection(connection === 'Disconnected ●︿●' ? 'Connected ( ͡° ͜ʖ ͡°)' : 'Disconnected ●︿●')
        setModal(modal == true ? false : true)
        console.log(modal)
    }

    return (
        <>
            <Modal
                animationType='fade'
                transparent={true}
                visible={modal == true}>
                <View style={ConnectionStyle.modalContent}>
                    <TouchableOpacity
                        onPress={press}
                        style={ConnectionStyle.modalExitButton}
                    />
                    <Text style={{ color: '#fff', fontSize: 100 }}>dswad</Text>
                </View>
            </Modal>

            <View style={ConnectionStyle.connectionContainer}>
                <Text style={ConnectionStyle.connectionText}>dawdwa</Text>
            </View>

            <TouchableOpacity style={ConnectionStyle.connectionButton} onPress={press} >
                <Image style={ConnectionStyle.bleImage} source={require('../../assets/bluetooth.png')} />
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
    },

    //? MODAL

    modalContent: {
        margin: 25,
        flex: 1,
        backgroundColor: 'red',
        borderRadius: 10,
    },

    modalExitButton: {
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: 'blue'
    }
})