import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@app/@shared/shared.module';
import { TableFacade } from '@app/dfs/mlb/facade/table.facade';
import { MaterialModule } from '@app/material.module';
import { NgxsModule } from '@ngxs/store';
import { sandboxOf } from 'angular-playground';
import { NFLTableFacade } from '../../facade/table.facade';
import { PlayerTableComponent } from './player-table.component';

@Component({
  selector: `app-player-table-sandbox`,
  templateUrl: './player-table.component.sandbox.html',
  styleUrls: [],
})
class PlayerTableSandboxComponent {
  dfsPlayers = [
    {
      siteId: 1978546,
      name: 'Aaron Rodgers',
      position: 'QB',
      team: 'GBP',
      isHome: false,
      statGroup: 'nfl-qb',
      salary: 6800,
      playerAdvanced: {
        fptsPerGame: 15,
        targetShare: 0,
        rzTargetShare: 0,
        dominatorRating: 0,
        aDOT: 0,
        avgTargetDist: 0,
        catchableTargetRate: 0,
        gameScript: 0,
        goalLineCarriesGame: 0,
      },
      playerProjection: { targets: 0, fpts: 19, fptsVal: '2.91', ceil: 33, floor: 15 },
      opponent: {
        info: { hashtag: 'SF', id: '359', rg_id: '31', name: '49ers', isHome: true },
        passDef: 101,
        passDefRk: 7,
        fptsAllowedRk: {
          allowedToRawQb: 5,
          allowedToAdjQb: 8,
          allowedToDifQb: -3,
          allowedToRawrb: 14,
          allowedToAdjRb: 7,
          allowedToDifRb: 7,
          allowedToRawWr: 27,
          allowedToAdjWr: 22,
          allowedToDifWr: 5,
          allowedToRawTe: 2,
          allowedToAdjTe: 18,
          allowedToDifTe: -16,
        },
      },
      profilerPlayer: {
        profilerId: 'AR-1300',
        'Expected Points Added': '9.4424',
        'Pass EPA': '8.7581',
        'Rush EPA': '0.6843',
        'Fantasy Points Per Game': '15.06',
        'Production Premium': '3.89999999999999',
        'Production Premium Rank': '14',
        'Total QBR': '46.2',
        'Offensive Line Rank': '--',
        'Air Yards Per Attempt': '8.5636',
        'Air Yards Per Game': '235.5',
        'Attempts Inside 10 Per Game': '2.5',
        'Carries Inside 5 Per Game': '0',
        'Pass Attempt Distance': '--',
        'Passing Attempts': '--',
        'Deep Ball Attempts Rank': '11',
        'Deep Ball Completion Percentage': '22.2222',
        'Under Pressure Attempts Rank': '29',
        'Pressured Completion Percentage': '14.2857',
        'Protection Rate': '84.7458',
        'Receiver Target Separation': '1.78333333333333',
        'Catchable Passes Per Game': '19.5',
        'Attempts Per Game': '27.5',
        'Receiver Contested Catch Rate': '100',
        'Supporting Cast Efficiency': '-9.57',
        'Receiver Yards After The Catch Per Target': '--',
        'Interceptable Passes': '4',
        'Play-action Pass Completion Percentage': '57.1429',
        'True Passer Rating': '86.0577',
        'Under Pressure Attempts Per Game': '3.5',
        'Weekly Volatility': '1.1024',
      },
      opponentInfo: {
        safpts: {
          RawQB: '5',
          AdjQB: '8',
          DifQB: '-3',
          RAWRB: '14',
          AdjRB: '7',
          DifRB: '7',
          RawWR: '27',
          AdjWR: '22',
          DifWR: '5',
          RawTE: '2',
          AdjTE: '18',
          DifTE: '-16',
        },
      },
    },
    {
      name: 'Aaron Rodgers',
      position: 'QB',
      team: 'GBP',
      isHome: false,
      statGroup: 'nfl-qb',
      salary: 12800,
      playerAdvanced: {
        fptsPerGame: 15,
        targetShare: 0,
        rzTargetShare: 0,
        dominatorRating: 0,
        aDOT: 0,
        avgTargetDist: 0,
        catchableTargetRate: 0,
        gameScript: 0,
        goalLineCarriesGame: 0,
      },
      playerProjection: { targets: 0, fpts: 19, fptsVal: '2.91', ceil: 33, floor: 15 },
      opponent: {
        info: { hashtag: 'SF', id: '359', rg_id: '31', name: '49ers', isHome: true },
        passDef: 101,
        passDefRk: 7,
        fptsAllowedRk: {
          allowedToRawQb: 5,
          allowedToAdjQb: 8,
          allowedToDifQb: -3,
          allowedToRawrb: 14,
          allowedToAdjRb: 7,
          allowedToDifRb: 7,
          allowedToRawWr: 27,
          allowedToAdjWr: 22,
          allowedToDifWr: 5,
          allowedToRawTe: 2,
          allowedToAdjTe: 18,
          allowedToDifTe: -16,
        },
      },
      profilerPlayer: {
        profilerId: 'AR-1300',
        'Expected Points Added': '9.4424',
        'Pass EPA': '8.7581',
        'Rush EPA': '0.6843',
        'Fantasy Points Per Game': '15.06',
        'Production Premium': '3.89999999999999',
        'Production Premium Rank': '14',
        'Total QBR': '46.2',
        'Offensive Line Rank': '--',
        'Air Yards Per Attempt': '8.5636',
        'Air Yards Per Game': '235.5',
        'Attempts Inside 10 Per Game': '2.5',
        'Carries Inside 5 Per Game': '0',
        'Pass Attempt Distance': '--',
        'Passing Attempts': '--',
        'Deep Ball Attempts Rank': '11',
        'Deep Ball Completion Percentage': '22.2222',
        'Under Pressure Attempts Rank': '29',
        'Pressured Completion Percentage': '14.2857',
        'Protection Rate': '84.7458',
        'Receiver Target Separation': '1.78333333333333',
        'Catchable Passes Per Game': '19.5',
        'Attempts Per Game': '27.5',
        'Receiver Contested Catch Rate': '100',
        'Supporting Cast Efficiency': '-9.57',
        'Receiver Yards After The Catch Per Target': '--',
        'Interceptable Passes': '4',
        'Play-action Pass Completion Percentage': '57.1429',
        'True Passer Rating': '86.0577',
        'Under Pressure Attempts Per Game': '3.5',
        'Weekly Volatility': '1.1024',
      },
      opponentInfo: {
        safpts: {
          RawQB: '5',
          AdjQB: '8',
          DifQB: '-3',
          RAWRB: '14',
          AdjRB: '7',
          DifRB: '7',
          RawWR: '27',
          AdjWR: '22',
          DifWR: '5',
          RawTE: '2',
          AdjTE: '18',
          DifTE: '-16',
        },
      },
    },
  ];

  constructor(readonly tableFacade: NFLTableFacade) {}
}
export default sandboxOf(PlayerTableSandboxComponent, {
  label: 'NFL DFS',
  declarations: [PlayerTableComponent],
  imports: [SharedModule, MaterialModule, NgxsModule.forRoot([]), BrowserAnimationsModule],
}).add('PlayerTableComponent', {
  template: `<app-player-table-sandbox></app-player-table-sandbox>`,
});
