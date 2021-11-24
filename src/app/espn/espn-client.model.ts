export interface EspnClientLeague {
  id: number;
  schedule: EspnClientScheduleEntry[];
  scoringPeriodId: number;
  settings: { name: string };
  teams: EspnClientTeam[];
}

export interface EspnClientScheduleEntry {
  teams: EspnClientScheduleTeams[];
}

export interface EspnClientScheduleTeams {
  teamId: number;
  totalPoints: number;
  totalPointsLive: number;
}

export interface EspnClientTeam {
  id: number;
  abbrev: string;
  location: string;
  nickname: string;
  roster: EspnClientRoster;
  points: number;
  logo: string;
  playoffSeed: number;
  draftDayProjectedRank: number;
  currentProjectedRank: number;
  rankCalculatedFinal: number;
  pointsByStat: {
    [key: number]: number;
  };
  valuesByStat: {
    [key: number]: number;
  };
}

export interface EspnClientRoster {
  entries: EspnClientPlayer[];
}

export interface EspnClientPlayer {
  playerId: number;
  lineupSlotId: number;
  playerPoolEntry: EspnClientPlayerEntry;
}

export interface EspnClientPlayerEntry {
  player: EspnClientPlayerInfo;
  ratings: EspnClientPlayerRatings;
}

export interface EspnClientPlayerInfo {
  fullName: string | null;
  playerId: number | null;
  lastNewsDate: number;
  defaultPositionId: number;
  proTeamId: number;
  injured: boolean;
  injuryStatus: string;
  ownership: EspnClientPlayerOwnership;
  eligibleSlots: number[];
  stats: EspnClientPlayerStatsYear[];
  starterStatusByProGame: EspnClientGameStatus;
}

export interface EspnClientGameStatus {
  [key: number]: string;
}

export interface EspnClientPlayerOwnership {
  averageDraftPosition: number;
  percentChange: number;
  percentOwned: number;
  percentStarted: number;
}

export interface EspnClientPlayerRatings {
  [key: number]: {
    positionalRanking: number;
    totalRanking: number;
    totalRating: number;
  };
}

export interface EspnClientPlayerStatsYear {
  seasonId: number;
  statSplitTypeId: number;
  scoringPeriodId: number;
  stats: EspnClientPlayerStatsEntity;
}

export interface EspnClientPlayerStatsEntity {
  [key: number]: number;
}

export interface EspnClientPlayerNews {
  timestamp: string;
  resultsOffset: number;
  status: string;
  resultsLimit: number;
  resultsCount: number;
  feed: EspnClientPlayerNewsFeedEntity[] | null;
}

export interface EspnClientPlayerNewsFeedEntity {
  lastModified: string;
  headline: string;
  story: string;
}

export interface EspnClientEventList {
  events: EspnClientEvent[];
}

export interface EspnClientEvent {
  id: string;
  date: string;
  summary: string;
  percentComplete: number;
  competitors: EspnClientCompetitor[];
  fullStatus: EspnClientFullEventStatus;
}

export interface EspnClientFullEventStatus {
  clock: number;
  displayClock: string;
  period: number;
  type: EspnClientEventStatusType;
  halfInning: number;
  periodPrefix: string;
}

export interface EspnClientEventStatusType {
  id: string;
  name: string;
  state: string;
  completed: boolean;
  description: string;
  detail: string;
  shortDetail: string;
}

export interface EspnClientCompetitor {
  id: string;
  homeAway: string | 'home' | 'away';
  score: number | string;
  record: string;
  abbreviation: string;
  winner: boolean;
}
