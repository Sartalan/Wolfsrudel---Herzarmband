import { StyleSheet } from "react-native";

const profileSize = 150
const profileBorder = 2.5
const profileRadius = 150
//---
const buttonSize = (profileSize / 9)
//---
const nameSize = 40

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
        shadowColor: 'white',
        borderRadius: profileRadius,
        borderColor: '#fff',
        opacity: .25,
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
        backgroundColor: '#0d9'
    },

    name: {
        padding: 25,
        color: '#fff',
        fontSize: nameSize,
        fontFamily: 'sans-serif'
    },
    //! Second Section
    hr: {
        height: 5,
        width: 100,
        backgroundColor: 'white',
        borderRadius: 10
    },


    //? HeartRate

    containerTwo: {
        flex: 1,
        height: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },  

    heartContainer: {
        backgroundColor: '#74F2CE',
        width: 350,
        height: 150,
        borderRadius: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    heart: {
        width: 100,
        height: 100,
        padding: 10
    },

    heartText: {
        fontSize: 50
    }
});