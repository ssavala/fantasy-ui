import { RotogrindMLBTeam } from './teams.enum';

export enum DfsSite {
  DraftKings = 'draftkings',
  FanDuel = 'fanduel',
  Yahoo = 'yahoo',
}

export enum DfsSiteType {
  FanDuel = 2,
  DraftKings = 20,
  Yahoo = 50,
}

export const dfsSiteToDfsSiteTypeMap: { [val: string]: DfsSiteType } = {
  [DfsSite.DraftKings]: DfsSiteType.DraftKings,
  [DfsSite.FanDuel]: DfsSiteType.FanDuel,
  [DfsSite.Yahoo]: DfsSiteType.Yahoo,
};

export enum DfsSport {
  afl = 'afl',
  bball = 'bball',
  cbb = 'cbb',
  cfb = 'cfb',
  cod = 'cod',
  csgo = 'csgo',
  el = 'el',
  golf = 'golf',
  kbo = 'kbo',
  lol = 'lol',
  madden = 'madden',
  mlb = 'mlb',
  mma = 'mma',
  nas = 'nas',
  nba = 'nba',
  nfl = 'nfl',
  nhl = 'nhl',
  npb = 'npb',
  rl = 'rl',
  soc = 'soc',
  ten = 'ten',
  wnba = 'wnba',
}

export enum Threshold {
  excellent,
  great,
  aboveAvg,
  avg,
  belowAvg,
  poor,
  awful,
}

export enum ThresholdClass {
  excellent = 'excellent',
  great = 'great',
  aboveAvg = 'above-avg',
  avg = 'avg',
  belowAvg = 'below-avg',
  poor = 'poor',
  awful = 'awful',
}

export const DFS_NFL_TEAM_MAP = {
  2: 'CIN',
  8: 'MIN',
  12: 'NYJ',
  16: 'TEN',
  17: 'DAL',
  22: 'CAR',
  24: 'TB',
  29: 'AZ',
};

export const DFS_MLB_TEAM_MAP = {
  [RotogrindMLBTeam.Bal]: 'Bal',
  [RotogrindMLBTeam.Bos]: 'Bos',
  [RotogrindMLBTeam.LAA]: 'LAA',
  [RotogrindMLBTeam.ChW]: 'ChW',
  [RotogrindMLBTeam.Cle]: 'Cle',
  [RotogrindMLBTeam.Det]: 'Det',
  [RotogrindMLBTeam.KC]: 'KC',
  [RotogrindMLBTeam.Mil]: 'Mil',
  [RotogrindMLBTeam.Min]: 'Min',
  [RotogrindMLBTeam.NYY]: 'NYY',
  [RotogrindMLBTeam.Oak]: 'Oak',
  [RotogrindMLBTeam.Sea]: 'Sea',
  [RotogrindMLBTeam.Tex]: 'Tex',
  [RotogrindMLBTeam.Tor]: 'Tor',
  [RotogrindMLBTeam.Atl]: 'Atl',
  [RotogrindMLBTeam.ChC]: 'ChC',
  [RotogrindMLBTeam.Cin]: 'Cin',
  [RotogrindMLBTeam.Hou]: 'Hou',
  [RotogrindMLBTeam.LAD]: 'LAD',
  [RotogrindMLBTeam.Wsh]: 'Wsh',
  [RotogrindMLBTeam.NYM]: 'NYM',
  [RotogrindMLBTeam.Phi]: 'Phi',
  [RotogrindMLBTeam.Pit]: 'Pit',
  [RotogrindMLBTeam.StL]: 'StL',
  [RotogrindMLBTeam.SD]: 'SD',
  [RotogrindMLBTeam.SF]: 'SF',
  [RotogrindMLBTeam.Col]: 'Col',
  [RotogrindMLBTeam.Mia]: 'Mia',
  [RotogrindMLBTeam.Ari]: 'Ari',
  [RotogrindMLBTeam.TB]: 'TB',
};

export const positionFilter = ['', 'C', '1B', '2B', 'SS', '3B', 'OF'];

export const tierFilter = ['', 'T1', 'T2', 'T3', 'T4', 'T5', 'T6'];

export const DFS_TOOLTIPS = {
  CONTACT: 'Batted ball trajectory stats. Batted ball quality stats. Examples: GB%, Hard%, Speed-Angle combination stats.',
  CONTEXT: 'Elements outside the realm of evaluation in a single pitch. Examples: Batting Order, Weather, Park, Umpire',
  PITCH_TYPE:
    // eslint-disable-next-line max-len
    'An evaluation across categories to measure and rate performance on or vs. a pitch type. Example: GB% vs. FT. Whiff% vs. SL. Contact % vs. CUKC.',
  PRODUCTION: 'Statistics that describe the outcomes displayed by a player. Examples: wOBA, BB%, Indicators.',
  PLATE_DISC: 'Skills displayed by batters and pitchers controlling the PA. Examples: Contact%, SwStrk%, OSwing%, Batter Ahead%',
  RECENT_SKILL:
    'A Review and rating of more recent behavior across categories. Example: EV Differential, Pitcher Velocity Change, 60 Day K%',
};
