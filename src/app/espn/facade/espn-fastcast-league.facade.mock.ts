import { FastcastEvent } from '../models/fastcast-event.model';
import { EspnFastcastLeagueFacade } from './espn-fastcast-league.facade';

export type Mock<T> = { [key in keyof T]: T[key] };

export class EspnFastcastLeagueMock implements Mock<EspnFastcastLeagueFacade> {
  fastcastEventsByLeagueId(id: string): FastcastEvent[] {
    throw new Error('Method not implemented.');
  }
}
