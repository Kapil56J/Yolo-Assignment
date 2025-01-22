import React from 'react';
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './Components/BottomTab';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <GestureHandlerRootView>
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='YoloPay'>
          <Stack.Screen name='Home Page' component={MyTabs} options={{
            title: 'Home',
            headerShown: false,
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
    </GestureHandlerRootView>
  );
}
