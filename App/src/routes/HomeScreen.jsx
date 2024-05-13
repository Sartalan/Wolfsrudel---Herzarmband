import { View } from 'react-native';
import { HomeStyles } from '../styles/HomeStyle'
import { Profile } from '../components/Profile'
import { HeartRate } from '../components/HeartRate'

export function HomeScreen() {

  return (
    <>
      <View style={HomeStyles.container}>
        <Profile />
      </View>
      <View style={HomeStyles.containerTwo}>
        <HeartRate />
      </View>
    </>
  )
}

