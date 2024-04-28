import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { MyTabs } from './src/main';
import Constants from 'expo-constants';
import { View } from 'react-native';


export default function App() {
  return (
    <>
      <StatusBar
        style=''
        backgroundColor='#fff'
        translucent={false}
      />
      <NavigationContainer >
        <MyTabs />
      </NavigationContainer>
    </>
  );
}

console.log(StatusBar.currentHeight)


