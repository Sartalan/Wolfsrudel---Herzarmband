
import { Image } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HomeScreen } from './routes/HomeScreen'
import { ListScreen } from './routes/ListScreen'
const UserIcon = '../assets/icons/user.png'
const ListIcon = '../assets/icons/list.png'
const sizeIcons = 40;

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
                tabBarIndicatorStyle: {backgroundColor: '#74F2CE'},
                tabBarActiveTintColor: '#ffffff',
                tabBarIconStyle: { width: 50, height: 50 },
                tabBarStyle: { backgroundColor: '#000' },
            }}

        >

            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Image
                            source={require(UserIcon)}
                            style={{ tintColor: color, width: sizeIcons, height: sizeIcons }}
                        />
                    )
                }}
            />
            <Tab.Screen name="List" component={ListScreen} 
             options={{
                tabBarIcon: ({ color }) => (
                    <Image
                        source={require(ListIcon)}
                        style={{ tintColor: color, width: sizeIcons, height: sizeIcons }}
                    />
                )
            }}/>
        </Tab.Navigator>
    );
}

