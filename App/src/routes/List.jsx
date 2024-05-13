import { StyleSheet, Text, View } from 'react-native';

export function List() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> List </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 50
    }
});

/*

 <TouchableOpacity 
        style={HomeStyles.heartContainer}>
            <Image
                style={HomeStyles.heart}
                source={require('../../assets/heart.png')}
            />
            <Text style={HomeStyles.heartText}>Heartbeat</Text>
        </TouchableOpacity>

        backgroundColor: '#74F2CE',


*/