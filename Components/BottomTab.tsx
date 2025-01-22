import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import { BadgePercent, Home, QrCode } from 'lucide-react-native';
import HomePage from '../src/screens/HomePage';
import { LucideProps } from 'lucide-react-native';
import YoloPay from '../src/screens/YoloPay';
import Ginie from '../src/screens/Ginie';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({ IconComponent, focused }: { IconComponent: React.ComponentType<LucideProps>, focused: boolean }) => {
    const scaleAnim = React.useRef(new Animated.Value(focused ? 1.2 : 1)).current;

    React.useEffect(() => {
        Animated.timing(scaleAnim, {
            toValue: focused ? 1.2 : 1,
            duration: 300,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
        }).start();
    }, [focused]);

    return (
        <Animated.View style={[styles.iconContainer, focused ? styles.activeIcon : styles.inactiveIcon]}>
            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                <IconComponent color={focused ? '#FFF' : 'rgba(255, 255, 255, 0.6)'} size={ focused ? 24 : 22} />
            </Animated.View>
        </Animated.View>
    );
};

const MyTabs = () => {
    return (
        <>
        <Tab.Navigator
            initialRouteName="YoloPay"
            screenOptions={{
                tabBarActiveTintColor: '#FFF',
                tabBarInactiveTintColor: 'rgba(250, 221, 221, 0.6)',
                tabBarStyle: {
                    backgroundColor: 'black',
                    borderTopWidth: 0,
                    height: 100,
                },
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="HomePage"
                component={HomePage}
                options={{
                    tabBarLabelStyle: {fontSize: 12},
                    tabBarLabel: 'home',
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon IconComponent={Home} focused={focused} />
                    ),
                }}
            />
            <Tab.Screen
                name="YoloPay"
                component={YoloPay}
                options={{
                    tabBarLabelStyle: { fontSize: 15},
                    tabBarLabel: 'yolo pay',
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon IconComponent={QrCode} focused={focused} />
                    ),
                }}
            />
            <Tab.Screen
                name="Ginie"
                component={Ginie}
                options={{
                    tabBarLabelStyle: {fontSize: 12},
                    tabBarLabel: 'ginie',
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon IconComponent={BadgePercent} focused={focused} />
                    ),
                }}
            />
        </Tab.Navigator>
      
         </>
    );
};

export default MyTabs;

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: 'black',
        borderTopWidth: 0,
        height: 100,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    activeIcon: {
        borderColor: '#FFF',
        borderWidth: 1,
        borderBottomWidth: 0
    },
    inactiveIcon: {
        borderColor: 'rgba(255, 255, 255, 0.6)',
        borderWidth: 0.2,
        borderBottomWidth: 0
    },
});

