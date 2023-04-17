import { View, StyleSheet, SafeAreaView} from 'react-native'
import React from 'react'
import { SvgFromUri } from 'react-native-svg';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../types/Navigation';
import { MLB } from '../../types/MLB';

const MLBGameScreen = () => {
    const route = useRoute<RouteProp<RootStackParamList>>();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const game: MLB.Game= route.params?.game;

  const [backgroundColor, setBackgroundColor] = React.useState('#1C3879')

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
                            uri={`https://www.mlbstatic.com/team-logos/team-cap-on-light/${game?.teams.away.team.id}.svg`}
                            width={200}
                            height={200}
                            // onTouchStart={() => goal()}
                        />
                        {/* <Text style={styles.score}>{awayGoals}</Text> */}
                    </View>
                    <View style={styles.team}>
                        <SvgFromUri
                            uri={`https://www.mlbstatic.com/team-logos/team-cap-on-light/${game?.teams.home.team.id}.svg`}
                            width={200}
                            height={200}
                        />
                        {/* <Text style={styles.score}>{homeGoals}</Text> */}
                    </View>
                </View>
                <View style={styles.gameInfo}>
                    {/* <Text style={styles.period}>{liveData == null ? game?.linescore.currentPeriodTimeRemaining : liveData.linescore.currentPeriodTimeRemaining} {game?.linescore.currentPeriodOrdinal}</Text> */}
                </View>
            </SafeAreaView>
        </View >
    )
}

export default MLBGameScreen
