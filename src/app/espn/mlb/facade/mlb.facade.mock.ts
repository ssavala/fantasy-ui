import { MOCK_DATA_ESPN } from '@app/@shared/helpers/testConfigs';
import { Observable, of } from 'rxjs';
import { BaseballGame } from '../class/baseballGame.class';
import { BaseballTeam } from '../class/baseballTeam.class';
import { EventMap, ScheduleMap, TeamMap } from '../state/mlb-state.model';
import { MlbFacade } from './mlb.facade';

export type Mock<T> = { [key in keyof T]: T[key] };

export class MockMlbFacade implements Mock<MlbFacade> {
  teams$: Observable<TeamMap>;
  events$: Observable<EventMap>;
  standings$: Observable<BaseballTeam[]>;
  schedule$: Observable<ScheduleMap>;
  liveScore$: Observable<BaseballTeam[]>;
  gamesMap$: Observable<{ [id: number]: BaseballGame }>;
  sortedGamesByStartTime$: Observable<BaseballGame[]>;
  noEvents$: Observable<boolean>;
  teamsEmpty$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  scoringPeriod: number;
  teamsSnapshot: TeamMap;
  teamsEmpty: boolean;
  eventSnapshot: EventMap;

  selectEventById = (id: number) => MOCK_DATA_ESPN.ESPN_EVENT;
  selectTeamById = (id: number) => MOCK_DATA_ESPN.ESPN_TEAM;
  getLeague = (leagueId: number) => null;
}
