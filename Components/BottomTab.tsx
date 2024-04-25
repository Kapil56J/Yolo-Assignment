import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notifications from '../src/screens/Notifications';
import { BellDot, Home, User } from 'lucide-react-native';
import Profile from '../src/screens/Profile';
import HomePage from '../src/screens/HomePage';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomePage"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                headerShown: false,
            }}
        >
             <Tab.Screen
                name="HomePage"
                component={HomePage}
                options={{
                    tabBarLabel: 'HomePage',
                    tabBarIcon: ({ color, size }) => (
                        <Home />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarLabel: 'Notifications',
                    tabBarIcon: ({ color, size }) => (
                        <BellDot />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <User />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default MyTabs;