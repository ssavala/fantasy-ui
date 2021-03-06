import { AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { sortAccessor } from '@app/@shared/helpers/sort';
import { DfsMatchup } from '@app/dfs/mlb/class/matchup.class';

@Component({
  selector: 'app-team-matchup-table',
  templateUrl: './team-matchup-table.component.html',
  styleUrls: ['./team-matchup-table.component.scss'],
})
export class TeamMatchupTableComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() dfsMatchup: DfsMatchup[];
  @Input() tableColumns: string;
  @Input() sport = 'mlb';

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  dataSource = new MatTableDataSource<DfsMatchup>();

  // readonly tableColumns: string[] = [
  //   'team',
  //   'vegas.line',
  //   'vegas.o/u',
  //   'vegas.movement',
  //   'teamTotal',
  //   'opponentPitcher.name',
  //   'topValue',
  //   'smashVal',
  //   'stackDiff',
  //   'stackLeverage',
  //   'stackValue',
  // ];
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(this.dfsMatchup[0]);

    this.dataSource.data = this.dfsMatchup;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sortingDataAccessor = (player, stat) => sortAccessor(player, stat);
    this.cdr.detectChanges();
  }

  ngOnChanges(): void {
    this.dataSource.data = this.dfsMatchup;
  }

  positiveChange(val: number): boolean {
    return val > 0;
  }

  movementTooltip(movement: number, total: number): string {
    return `From ${total - movement}`;
  }

  threshold(val: number, sport: string): string {
    let thresholdClass = '';
    if (val >= 5) {
      thresholdClass = 'excellent';
    } else if (val <= 4.99 && val >= 3.99) {
      thresholdClass = 'above-avg';
    } else if (val <= 3.98 && val >= 3.7) {
      thresholdClass = 'avg';
    } else if (val <= 3.69 && val >= 3.3) {
      thresholdClass = 'below-avg';
    } else if (val <= 3.29 && val >= 3.01) {
      thresholdClass = 'poor';
    } else if (val <= 3.0) {
      thresholdClass = 'awful';
    }
    return thresholdClass;
  }
}
