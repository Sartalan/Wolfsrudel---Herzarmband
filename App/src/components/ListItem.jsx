
import { useState, useEffect } from 'react'
import { TouchableOpacity, Image, Text, StyleSheet, View} from 'react-native'


var ws = new WebSocket('ws://10.0.5.7:8080');

ws.onopen = () => {
    // connection opened
    ws.send('fc');  // send a message
};

ws.onmessage = (e) => {
    // a message was received
    console.log(e.data);
};

export function ListItem({ name, source }) {

    const [view, setView] = useState(false)

    useEffect(() => {
        console.log("Me rendericé")
    }, [])

    function touch() {
        console.log('Presione Touch')
        setView(view == false ? true : false)
        console.log(view)
    }

    function Object() {
        if (view == true) {
            console.log('rojo')
            return (
                <View style={ItemStyle.otherView}>
                    <Text style={ItemStyle.otherText}>60</Text>
                </View>
            )
        }

        else {
            console.log('azul')
            return (
                <>
                    <Image
                        style={ItemStyle.icon}
                        source={source}
                    />
                    <Text style={ItemStyle.text}>{name}</Text>
                </>
            )
        }
    }

    return (
        <TouchableOpacity style={ItemStyle.container} onPress={touch}>
            <Object />
        </TouchableOpacity>
    )


}

const containerWidth = 350
const containerHeight = 150
const containerRadius = 10

const ItemStyle = StyleSheet.create({
    container: {
        backgroundColor: '#74F2CE',
        position: 'relative',
        width: containerWidth,
        height: containerHeight,
        borderRadius: containerRadius,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10

    },
    icon: {
        width: 50,
        height: 50
    },

    text: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'console'
    },

    otherView: {
        position: 'absolute',
        width: containerWidth,
        height: containerHeight,
        borderRadius: containerRadius,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },

    otherText: {
        fontSize: 50,
    }
})
