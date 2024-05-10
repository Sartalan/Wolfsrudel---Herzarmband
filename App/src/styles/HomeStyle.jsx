import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
    //? Container = All the HomeScreen style (its width, height, etc)

    container: {
        flex: 1,
        backgroundColor: "#000"
    },

    //todo Only profile (container, image, button)
    //todo --------------------------------
    profileContainer: {
        alignItems: 'center',
        position: 'relative',
        padding: 20,

    },

    profile: {
        width: 250,
        height: 250,
    },

    //todo --------------------------------
    //*------------------------------------

    image: {
        width: 250,
        height: 250,
        borderRadius: 150,
        borderColor: '#fff',
        borderWidth: 1,
        position: 'absolute',
        top: '0',
        right: '0',
        left: '0',
        bottom: '0',
        margin: 'auto',
    },

    falseImage: {
        width: 250,
        height: 250,
        borderWidth: 1,
        borderRadius: 150,
        borderColor: '#fff',
        position: 'absolute',
        top: '0',
        right: '0',
        left: '0',
        bottom: '0',
        margin: 'auto',
    },
    //*------------------------------------

    button: {
        padding: 25,
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: 'red'
    },

    name: {
        padding: 25,
        color: '#fff',
        fontSize: 50,
        fontFamily: 'sans-serif'
    }
//? OTHER SECTION


});