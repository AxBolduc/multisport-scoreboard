import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import GameScreen from './screens/GameScreens/NHLGameScreen';
import HomeScreen from './screens/HomeScreens/NHLHomeScreen';
import { RootStackParamList } from './types/Navigation';
import SportHomeScreen from './screens/HomeScreens/SportHomeScreen';
import MLBGameScreen from './screens/GameScreens/MLBGameScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();
export default function App() {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={SportHomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="MLBGame" component={MLBGameScreen} options={{ headerShown: false }} />
          <Stack.Screen name="NHLGame" component={GameScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

