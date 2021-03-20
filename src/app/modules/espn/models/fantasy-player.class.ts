
export class FantasyPlayer {
    constructor(public _player: Player) { }
}


export interface Player {
    playerId: number;
    lineupSlotId: number;
    playerPoolEntry: PlayerEntry;
}

interface PlayerEntry {
    player: PlayerInfo;
    ratings: PlayerRatings;
}

interface PlayerInfo {
    fullName: string;
    lastNewsDate: number;
    defaultPositionId: number;
    proTeamId: number;
    injured: boolean;
    injuryStatus: string;
    ownership: PlayerOwnership;
    eligibleSlots: number[];
    stats: PlayerStatsYear[];
}

interface PlayerOwnership {
    averageDraftPosition: number;
    percentChange: number;
    percentOwned: number;
    percentStarted: number;
}

interface PlayerRatings {
    [key: number]: {
        positionalRanking: number;
        totalRanking: number;
        totalRating: number;
    };
}

interface PlayerStatsYear {
    seasonId: number;
    statSplitTypeId: number;
    scoringPeriodId: number;
    stats: PlayerStatsEntity;
}

interface PlayerStatsEntity {
    [key: number]: number;
}

export interface PlayerNews {
    timestamp: string;
    resultsOffset: number;
    status: string;
    resultsLimit: number;
    resultsCount: number;
    feed?: (FeedEntity)[] | null;
}

interface FeedEntity {
    lastModified: string;
    headline: string;
    story: string;
}


