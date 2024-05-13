
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native'

export function ListItem({ name, source }) {
    return (
        <TouchableOpacity style={ItemStyle.container}>
            <Image
                style={ItemStyle.icon}
                source={source}
            />
            <Text style={ItemStyle.text}>{name}</Text>
        </TouchableOpacity>
    )
}

const ItemStyle = StyleSheet.create({
    container: {
        backgroundColor: '#74F2CE',
        width: 350,
        height: 150,
        borderRadius: 10,
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
    }
})
