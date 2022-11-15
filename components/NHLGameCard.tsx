import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { NHL } from '../types/NHL'
import { NavigationProp, RouteProp, useNavigation, useRoute} from '@react-navigation/native'
import { RootStackParamList } from '../types/Navigation'

// React native styles for a card component
const GameCardStyles = StyleSheet.create({
  card: {
    backgroundColor: '#607EAA',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    width: '100%'
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#EAE3D2'
  },
  cardDescription: {
    fontSize: 14,
    color: '#999'
  }
})


const NHLGameCard = (props: NHL.GameCardProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  return (
    <TouchableNativeFeedback onPress={() => navigation.navigate("NHLGame", {game: props.game})}>
      <View style={GameCardStyles.card}>
        <Text style={GameCardStyles.cardTitle}>{props.game.teams.away.team.name} @ {props.game.teams.home.team.name}</Text>
      </View>
    </TouchableNativeFeedback>
  )
}

export default NHLGameCard