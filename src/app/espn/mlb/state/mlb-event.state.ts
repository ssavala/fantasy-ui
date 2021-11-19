import { Injectable } from '@angular/core';
import { entityMap } from '@app/@shared/operators';
import { State, Selector, Action, StateContext } from '@ngxs/store';

import { EspnClientEvent } from '../interface';
import { MlbEvent } from '../models/mlb-event.model';

export class PatchEvents {
  static readonly type = `[mlbEvents] PatchEvents`;
  constructor(public payload: { events: MlbEvent[] }) {}
}

interface MlbEventStateModel {
  map: { [id: string]: MlbEvent };
}

@State<MlbEventStateModel>({
  name: 'mlbEvents',
  defaults: {
    map: {},
  },
})
@Injectable()
export class MlbEventState {
  constructor() {}

  @Selector()
  static getEventMap(state: MlbEventStateModel) {
    return state.map;
  }

  @Action(PatchEvents)
  patchEvents(ctx: StateContext<MlbEventState>, { payload: { events } }: PatchEvents) {
    ctx.patchState(entityMap(events, event => event.id));
  }
}
