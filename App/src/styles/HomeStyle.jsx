import { StyleSheet } from "react-native";

const profileSize = 150
const profileBorder = 1
const profileRadius = 150
//---
const buttonSize = (profileSize/9)
//---
const nameSize = 50

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
        padding: 50,

    },

    profile: {
        width: profileSize,
        height: profileSize,
    },

    //todo --------------------------------
    //*------------------------------------

    image: {
        width: profileSize,
        height: profileSize,
        borderRadius: profileRadius,
        borderColor: '#fff',
        borderWidth: profileBorder,
        position: 'absolute',
        top: '0',
        right: '0',
        left: '0',
        bottom: '0',
        margin: 'auto',
    },

    falseImage: {
        width: profileSize,
        height: profileSize,
        borderWidth: profileBorder,
        borderRadius: profileRadius,
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
        padding: buttonSize,
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: 'red'
    },

    name: {
        padding: 25,
        color: '#fff',
        fontSize: nameSize,
        fontFamily: 'sans-serif'
    }
//? OTHER SECTION


});