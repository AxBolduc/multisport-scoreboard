import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NHLHomeScreen from './NHLHomeScreen';
import MLBHomeScreen from './MLBHomeScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const SportHomeScreen = () => {
  return (
    <Tab.Navigator screenOptions={
      ({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
            let iconName = focused
              ? "baseball"
              : "baseball-outline"

          return <Ionicons name={iconName} size={size} color={color}/>
        }
      })
    }>
        <Tab.Screen name="NHL" component={NHLHomeScreen} />
        <Tab.Screen name="MLB" component={MLBHomeScreen} />
    </Tab.Navigator>
  )
}

export default SportHomeScreen
