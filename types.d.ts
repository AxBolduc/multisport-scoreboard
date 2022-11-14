export interface GameCardProps {
  game: Game
}

export type RootStackParamList = {
    Home: undefined
    NHLGame: { game: Game }
    MLBGame: { game: Game}
}

export interface NHLSchedule {
    dates: Date[]
}

export interface Date {
    date: string
    games: Game[]
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

export interface Content {
    link: string
}

export interface Status {
    abstractGameState: string
    codedGameState: string
    detailedState: string
    statusCode: string
    startTimeTBD: boolean
}

export interface Teams {
    away: TeamGameData
    home: TeamGameData
}

export interface TeamGameData {
    leagueRecord: LeagueRecord
    score: number 
    goals: number
    team: Team
}

export interface LeagueRecord {
    wins: number
    losses: number
    ot: number
    type: string
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
    conference: Division
    franchise: Franchise
    shortName: string
    officialSiteUrl: string
    franchiseId: number
    active: boolean
}

export interface Division {
    id: number
    name: string
    nameShort: string
    link: string
    abbreviation: string
}

export interface Franchise {
    franchiseId: number
    teamName: string
    link: string
}

export interface Venue {
    id: number
    name: string
    link: string
}

export interface Linescore {
    currentPeriod: number
    currentPeriodOrdinal: string
    currentPeriodTimeRemaining: string
    periods: Period[]
    shootoutInfo: Shootoutinfo
    teams: Teams
    powerPlayStrength: string
    hasShootout: boolean
    intermissionInfo: Intermissioninfo
    powerPlayInfo: Powerplayinfo
}

export interface Intermissioninfo {
    intermissionTimeRemaining: number
    intermissionTimeElapsed: number
    inIntermission: boolean
}

export interface Period {
    periodType: string
    startTime: string
    endTime: string
    num: number
    ordinalNum: string
    home: Home
    away: Home
}

export interface Home {
    goals: number
    shotsOnGoal: number
    rinkSide: string
}

export interface Powerplayinfo {
    situationTimeRemaining: number
    situationTimeElapsed: number
    inSituation: boolean
}

export interface Shootoutinfo {
    away: TeamGameData
    home: TeamGameData
}

export interface GameCardProps {
    game: Game
}

export interface LiveData {
    linescore: Linescore
}

