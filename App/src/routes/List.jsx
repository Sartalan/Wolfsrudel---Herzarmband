import { ScrollView, StyleSheet, TextInput } from 'react-native';
import { ListItem } from '../components/ListItem';
const heartBeatIcon = '../../assets/heart.png'

export function List() {

    return (
        <ScrollView
            contentContainerStyle={{
                justifyContent: 'space-around',
                alignItems: 'center',
                gap: 50,
                padding: 25,
            }}
            style={ListStyles.list}>
            <ListItem style={ListStyles.item}
                name={'Frecuencia'}
                source={require(heartBeatIcon)}
            />
            <ListItem style={ListStyles.item}
                name={'Tensión'}
                source={require(heartBeatIcon)}
            />

        </ScrollView>
    )
}

const ListStyles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff'
    },

    list: {
        backgroundColor: '#000'
    },
    item: {

    }
});
