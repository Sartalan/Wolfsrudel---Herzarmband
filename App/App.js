import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { MyTabs } from './src/main';

export default function App() {
  return (
    <>
      <StatusBar
        style=''
        backgroundColor='#ffffff'
        translucent={false}
      />
      <NavigationContainer >
        <MyTabs />
      </NavigationContainer>
    </>
  );
}




