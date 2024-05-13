import { View } from 'react-native';
import { HomeStyles } from '../styles/HomeStyle'
import { Profile } from '../components/Profile'
import { Connection } from '../components/Connection'

export function HomeScreen() {

  return (
    <>
      <View style={HomeStyles.PROFILE_CONTAINER}>
        <Profile />
      </View>

      <View style={HomeStyles.CONNECTION_CONTAINER}>
        <Connection />
      </View>
    </>
  )
}

