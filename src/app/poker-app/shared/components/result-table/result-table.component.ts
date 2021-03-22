import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Round} from '../../../models/firestore';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultTableComponent implements OnInit, OnChanges {

  @Input() pastRounds: Round[] = [];

  @Input() activeRound: Round = null;

  tableData: { username: string; rounds: string[]; }[] = [];

  get tableLabels() {
    return ['Name', ...(this.tableData[0]?.rounds.map((v, i) => `Round ${i}`) || [])];
  }

  get hasActiveRoundColumn() {
    return !!this.activeRound;
  }

  constructor() {
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {

    console.log('g', changes.pastRounds.currentValue);
    console.log('g', changes.activeRound?.currentValue);
    const userIds = this.extractUsers(this.activeRound ? [...this.pastRounds, this.activeRound] : [...this.pastRounds]);
    this.tableData = this.buildTableData(userIds, this.pastRounds, this.activeRound);
  }


  extractUsers(rounds: Round[]) {
    const arr = rounds.reduce((acc, round) => {
      const userIds = Object.keys(round);
      return [...acc, ...userIds];
    }, []);

    return [...new Set(arr.sort())];
  }

  buildTableData(userIds: string[], rounds: Round[], activeRound?: Round) {
    return userIds.map(userId => { // rows


      const parsedRounds = rounds.map(round => {
        return this.parseRound(userId, round);
      });

      if (activeRound) {
        parsedRounds.push('-'); // round is not active, hide all results
      }


      return {
        username: userId,
        rounds: parsedRounds,
      };
    });
  }


  parseRound(userId: string, round: Round) {
    const keys = Object.keys(round);
    const participatedInRound = keys.includes(userId);

    if (participatedInRound && round[userId] !== null) {
      return round[userId].toString(); // has valid vote
    } else if (participatedInRound && round[userId] === null) {
      return '-'; // did not voted yet
    } else {
      return 'X'; // was not preset in the round
    }
  }


}
