import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { MyTabs } from './src/Main';
import Constants from 'expo-constants';


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle='light-content'
        backgroundColor='#000'
      />
      <MyTabs style={{ marginTop: Constants.statusBarHeight }} />
    </NavigationContainer>
  );
}



