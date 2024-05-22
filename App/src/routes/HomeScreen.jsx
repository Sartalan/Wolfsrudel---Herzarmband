import { View } from 'react-native';
import { HomeStyles } from '../styles/HomeStyle'
import { Profile } from '../components/HomeScreen/Profile.jsx'
import { ConnectionButton } from '../components/HomeScreen/ConnectionButton.jsx'

export function HomeScreen() {

  return (
    <>
      <View style={HomeStyles.PROFILE_CONTAINER}>
        <Profile />
      </View>

      <View style={HomeStyles.CONNECTION_CONTAINER}>
        <ConnectionButton />
      </View>
    </>
  )
}

