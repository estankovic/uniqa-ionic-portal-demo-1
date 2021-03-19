import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-voting-cards',
  templateUrl: './voting-cards.component.html',
  styleUrls: ['./voting-cards.component.scss'],
})
export class VotingCardsComponent implements OnInit {
  @Output() voteChange: EventEmitter<string> = new EventEmitter<string>();
  buttons: string[] = ['?', '0', '0.5', '1', '2', '3', '5', '8', '13', '20', '40', '10'];
  selectedButton;

  constructor() { }

  ngOnInit() {}

  onVotingButtonClick(buttonValue: string, index: any) {
    this.selectedButton = index;
    this.voteChange.emit(buttonValue);
  }
}
