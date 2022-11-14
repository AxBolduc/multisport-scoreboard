import { View, Text } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../../types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NHLHomeScreen from './NHLHomeScreen';
import MLBHomeScreen from './MLBHomeScreen';

const Tab = createBottomTabNavigator();
const SportHomeScreen = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="NHL" component={NHLHomeScreen} />
        <Tab.Screen name="MLB" component={MLBHomeScreen} />
    </Tab.Navigator>
  )
}

export default SportHomeScreen