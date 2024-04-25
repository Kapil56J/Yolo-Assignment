import React from 'react';
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './Components/BottomTab';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='HomePage'>
          <Stack.Screen name='Home Page' component={MyTabs} options={{
            title: 'Home',
            headerShown: false,
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
