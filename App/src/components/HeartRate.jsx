import { Text, Image, TouchableOpacity } from 'react-native'
import {useState} from 'react'
import { HomeStyles } from '../styles/HomeStyle'

export function HeartRate() {

    const [open, close] = useState(close)
    console.log(open)

    return (
        <TouchableOpacity 
        style={HomeStyles.heartContainer}>
            <Image
                style={HomeStyles.heart}
                source={require('../../assets/heart.png')}
            />
            <Text style={HomeStyles.heartText}>80</Text>
        </TouchableOpacity>
    )
}