import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { useFonts } from "expo-font";
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';


export function Profile() {

    useFonts({
        "Butterscotch": require("../../assets/fonts/butterscotch/Butterscotch.otf"),
    });


    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);
        console.log(setImage)

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={ProfileStyle.container}>
            <View style={ProfileStyle.profile}>

                <View style={ProfileStyle.falseProfile} />
                {image && <Image source={{ uri: image }} style={ProfileStyle.image} />}

                <TouchableOpacity style={ProfileStyle.button} onPress={pickImage}>

                </TouchableOpacity>
            </View>
            <Text style={ProfileStyle.name}>Alan Barrera</Text>
            <View style={ProfileStyle.hr}></View>
        </View>
    )
}

const profileSize = 150
const profileBorder = 2.5
const profileRadius = 150
//---
const buttonSize = (profileSize / 9)
//---
const nameSize = 40
const ProfileStyle = StyleSheet.create({
    container: {
        alignItems: 'center',
        position: 'relative',
        padding: 50,
    },
    profile: {
        width: profileSize,
        height: profileSize,
    },
    falseProfile: {
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
        fontFamily: 'Butterscotch'
    },

    hr: {
        height: 5,
        width: 100,
        backgroundColor: '#fff',
        borderRadius: 10
    }
})