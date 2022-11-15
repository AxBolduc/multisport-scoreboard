import { View, Text, Button, StyleSheet, Image, Animated } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, NavigationProp, useRoute, RouteProp, useFocusEffect } from '@react-navigation/native';
import { RootStackParamList } from '../../types/Navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgFromUri } from 'react-native-svg';
import { NHL } from '../../types/NHL';

const NHLGameScreen = () => {
    const route = useRoute<RouteProp<RootStackParamList>>();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const game = route.params?.game;
    const [liveData, setLiveData] = React.useState<NHL.LiveData>();
    const [backgroundColor, setBackgroundColor] = React.useState<string>('#1C3879');
    const [homeGoals, setHomeGoals] = React.useState<number>(game?.linescore.teams.home.goals || 0);
    const [awayGoals, setAwayGoals] = React.useState<number>(game?.linescore.teams.away.goals || 0);

    let loops = 0;

    //Score Update Flashing Animation
    const goal = () => {
        const value = new Animated.Value(0);
        Animated.timing(value, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
        }).start(() => {
            setBackgroundColor(loops % 2 == 0 ? '#FFFFFF' : '#1C3879');

            if (loops < 5) {
                loops++
                goal();
            } else {
                loops = 0;
            }
        });
    }

    //Check on get update if a goal was scored
    useEffect(() => {

        if (liveData != undefined) {
            if (liveData?.linescore.teams.home.goals != homeGoals) {
                setHomeGoals(liveData?.linescore.teams.home.goals || 0);
                goal();
            }

            if (liveData?.linescore.teams.away.goals != awayGoals) {
                setAwayGoals(liveData?.linescore.teams.away.goals || 0);
                goal();
            }
        }

    }, [liveData])


    //Setup the live data update when the screen is focused
    useFocusEffect(
        React.useCallback(() => {

            if (game?.linescore.currentPeriodTimeRemaining !== "Final") {
                const refreshGame = setInterval(() => {
                    fetch(`https://statsapi.web.nhl.com/api/v1/game/${game?.gamePk}/feed/live`)
                        .then((response) => response.json())
                        .then((json) => setLiveData(json['liveData']))
                }, 10000);

                return () => {
                    clearInterval(refreshGame);
                }
            } 
        }, [])
    )

    //React native stylesheet
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 10,
            backgroundColor: backgroundColor,
            justifyContent: 'center',
            alignItems: 'center'
        },
        celebrate: {
            flex: 1,
            padding: 10,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center'
        },
        team: {
            margin: 5,
        },
        score: {
            fontSize: 100,
            color: '#FFF',
            textAlign: 'center',
            width: '100%'
        },
        teamName: {
            color: '#EAE3D2',
            fontSize: 18,
            fontWeight: 'bold',
        },
        scores: {
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        logo: {
            width: 100,
            height: 100,
        },
        gameInfo: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            margin: 10,
        },
        period: {
            color: '#EAE3D2',
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            width: '100%'
        }
    });

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.scores}>
                    <View style={styles.team}>
                        <SvgFromUri
                            uri={`https://www-league.nhlstatic.com/images/logos/teams-20222023-light/${game?.teams.away.team.id}.svg`}
                            width={200}
                            height={200}
                            onTouchStart={() => goal()}
                        />
                        <Text style={styles.score}>{awayGoals}</Text>
                    </View>
                    <View style={styles.team}>
                        <SvgFromUri
                            uri={`https://www-league.nhlstatic.com/images/logos/teams-20222023-light/${game?.teams.home.team.id}.svg`}
                            width={200}
                            height={200}
                        />
                        <Text style={styles.score}>{homeGoals}</Text>
                    </View>
                </View>
                <View style={styles.gameInfo}>
                    <Text style={styles.period}>{liveData == null ? game?.linescore.currentPeriodTimeRemaining : liveData.linescore.currentPeriodTimeRemaining} {game?.linescore.currentPeriodOrdinal}</Text>
                </View>
            </SafeAreaView>
        </View >
    )
}




export default NHLGameScreen