import { Image, Text, TouchableOpacity, View } from 'react-native';
import { HomeStyles } from '../styles/HomeStyle'
import { useState } from 'react';

import * as ImagePicker from 'expo-image-picker';

const noImage = () => {
  return (
    <View style={HomeScreen.image}>

    </View>
  )
}

export function HomeScreen() {
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
    <View style={HomeStyles.container}>
      <View style={HomeStyles.profileContainer}>
        <View style={HomeStyles.profile}>

          <View style={HomeStyles.falseImage}/>
          {image && <Image source={{ uri: image }} style={HomeStyles.image} />}          

          <TouchableOpacity style={HomeStyles.button} onPress={pickImage}>

          </TouchableOpacity>
        </View>
        <Text style={HomeStyles.name}>Alan</Text>
      </View>
    </View>
  )
}

