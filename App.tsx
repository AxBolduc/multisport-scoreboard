import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import GameScreen from './screens/GameScreens/NHLGameScreen';
import { RootStackParamList } from './types/Navigation';
import SportHomeScreen from './screens/HomeScreens/SportHomeScreen';
import MLBGameScreen from './screens/GameScreens/MLBGameScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
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

