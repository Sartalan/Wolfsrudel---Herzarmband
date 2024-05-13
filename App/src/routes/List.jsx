import { ScrollView, StyleSheet } from 'react-native';
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
                name={'Heartbeat'}
                source={require(heartBeatIcon)}
            />
             <ListItem style={ListStyles.item}
                name={'daw'}
                source={require(heartBeatIcon)}
            />
        </ScrollView>
    )
}

const ListStyles = StyleSheet.create({
    list: {
        backgroundColor: '#000'
    },
    item: {

    }
});

/*



        backgroundColor: '#74F2CE',


*/