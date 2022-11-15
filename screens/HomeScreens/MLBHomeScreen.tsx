import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import moment from 'moment'
import { useFocusEffect } from '@react-navigation/native'
import NHLGameCard from '../../components/NHLGameCard'
import { MLB } from '../../types/MLB'
import MLBGameCard from '../../components/MLBGameCard'

const MLBHomeScreen = () => {
  const [games, setGames] = React.useState<MLB.Game[]>([])

    // const today = moment().format('YYYY-MM-DD')
    const today = '2022-07-22'

    useFocusEffect(
        React.useCallback(() => {
            //MLB Schedule API
            const url = `https://statsapi.mlb.com/api/v1/schedule?sportId=1&date=${today}&hydrate=team,linescore,game(content(media(epg)),seriesSummary)&site=en_mlb&teamId=&gameType=&timecode=`

            fetch(url)
                .then((response) => response.json())
                .then((json) => setGames(json.dates[0].games))
                .catch((error) => console.error(error))
            return () => {
            }
        }, [])
    )
    return (
        <SafeAreaView style={styles.safeView}>
            <ScrollView contentContainerStyle={styles.container}>
                {games.map((game, index) => {
                    return <MLBGameCard key={index} game={game} />
                })}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    safeView: {
        flex: 1,
        backgroundColor: '#1C3879',
    }
});


export default MLBHomeScreen