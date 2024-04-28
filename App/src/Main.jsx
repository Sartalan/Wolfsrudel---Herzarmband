
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HomeScreen } from './routes/HomeScreen'
import { Selector } from './routes/Selector'

const Tab = createMaterialTopTabNavigator();

export function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Selector" component={Selector} />
        </Tab.Navigator>
    );
}