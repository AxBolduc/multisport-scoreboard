import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import GameCard from '../components/GameCard'
import { Game } from '../types'
import { useFocusEffect } from '@react-navigation/native'
import moment from 'moment'

const HomeScreen = () => {
    const [games, setGames] = React.useState<Game[]>([])

    const today = moment().format('YYYY-MM-DD')

    useFocusEffect(
        React.useCallback(() => {
            const url = `https://statsapi.web.nhl.com/api/v1/schedule?startDate=${today}&endDate=${today}&hydrate=team,linescore,game(content(media(epg)),seriesSummary)&site=en_nhl&teamId=&gameType=&timecode=`

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
                    return <GameCard key={index} game={game} />
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

export default HomeScreen