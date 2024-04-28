
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HomeScreen } from './routes/HomeScreen'
import { Image } from 'react-native'
import { Selector } from './routes/Selector'
const User = '../assets/icons/user.png'
const sizeIcons = 42.5;

const Tab = createMaterialTopTabNavigator();

export function MyTabs() {
    return (
        <Tab.Navigator 
            initialRouteName='Home'
            backBehavior='history'
            tabBarPosition='top'
            screenOptions={{
                tabBarShowIcon: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#ffffff',
                tabBarIconStyle: { width: 50, height: 50 },
                tabBarStyle: { backgroundColor: '#000' },
            }}

        >

            <Tab.Screen name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Image
                            source={require(User)}
                            style={{ tintColor: color, width: sizeIcons, height: sizeIcons }}
                        />
                    )
                }}
            />
            <Tab.Screen name="Selector" component={Selector} />
        </Tab.Navigator>
    );
}

