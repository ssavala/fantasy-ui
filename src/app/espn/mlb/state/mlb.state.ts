import { Injectable } from '@angular/core';
import { gameMap, newTeamMap } from '@app/@shared/helpers/mapping';
import { entityMap } from '@app/@shared/operators/entities.operators';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import { EspnService } from '@espn/espn.service';
import { Game } from '../class/game.class';
import { BaseballTeam } from '../class/team.class';
import { BaseballTeamMap, EventMap, GameMap, MlbStateModel, ScheduleMap, TeamMap } from './mlb-state.model';
import { FetchBaseballLeague } from '../actions/mlb.actions';
import { EspnEvent, Team } from '../interface';

@State<MlbStateModel>({
  name: 'mlb',
  defaults: {
    scoringPeriodId: null,
    schedule: {},
    teams: {},
    events: {},
    isLoading: true,
  },
})
@Injectable()
export class MlbState {
  constructor(private espnService: EspnService) {}

  @Selector()
  static getState(state: MlbStateModel) {
    return state;
  }

  @Selector([MlbState.getState])
  static isLoading(_: MlbStateModel, getState: MlbStateModel) {
    return getState.isLoading;
  }

  @Selector()
  static scoringPeriod(state: MlbStateModel) {
    return state.scoringPeriodId;
  }

  @Selector()
  static schedule(state: MlbStateModel) {
    return state.schedule;
  }

  @Selector()
  static teams(state: MlbStateModel): TeamMap {
    return state.teams;
  }

  @Selector()
  static events(state: MlbStateModel): EventMap {
    return state.events;
  }

  @Action(FetchBaseballLeague)
  baseballLeague(ctx: StateContext<MlbStateModel>, { leagueId }: FetchBaseballLeague) {
    if (ctx.getState().scoringPeriodId) {
      console.log(`League ${leagueId} already in state, retrieving cache`);
      return;
    }

    return this.espnService.fetchEspnBaseball(leagueId).pipe(
      tap(([league, mlbGames]) => {
        const teams = entityMap(league.teams);
        const events = entityMap(mlbGames.events);
        const schedule = entityMap(league.schedule);

        ctx.patchState({
          teams,
          events,
          schedule,
          isLoading: false,
          scoringPeriodId: league.scoringPeriodId,
        });
      })
    );
  }
}
