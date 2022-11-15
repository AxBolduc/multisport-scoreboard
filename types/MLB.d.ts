export namespace MLB {
    export interface GameCardProps {
        game: Game
    }

    export interface Game {
        gamePk: number
        gameType: string
        season: string
        gameDate: string
        status: Status
        teams: Teams
        venue: Venue
        content: Content
        linescore: Linescore
    }

    export interface Teams {
        away: TeamGameData
        home: TeamGameData
    }

    export interface TeamGameData {
        leagueRecord: LeagueRecord
        score: number
        team: Team
        isWinner: boolean
        splitSquad: boolean
        seriesNumber: number
        gamesInSeries: number
        springLeague: SpringLeague
    }

    export interface LeagueRecord {
        wins: number
        losses: number
        pct: string
    }

    export interface Team {
        id: number
        name: string
        link: string
        venue: Venue
        abbreviation: string
        teamName: string
        locationName: string
        firstYearOfPlay: string
        division: Division
        league: League
        springLeague: SpringLeague
        shortName: string
        active: boolean
    }


    export interface Linescore {
        currentInning: number
        currentInningOrdinal: string
        inningState: string
        inningHalf: string
        isTopInning: boolean
        scheduledInnings: number
        innings: Inning[]
        teams: LinescoreTeams
        defense: Defense
        offense: Offense
        balls: number
        strikes: number
        outs: number
        runnersOnBase: number
    }

    export interface LinescoreTeams {
        away: LinescoreTeam
        home: LinescoreTeam
    }

    export interface LinescoreTeam {
        runs: number
        hits: number
        errors: number
        leftOnBase: number
    }


    export interface Inning {
        num: number
        ordinalNum: string
        home: InningStats
        away: InningStats
    }

    export interface InningStats {
        runs: number
        hits: number
        errors: number
        leftOnBase: number
    }


}