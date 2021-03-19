import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voting-cards',
  templateUrl: './voting-cards.component.html',
  styleUrls: ['./voting-cards.component.scss'],
})
export class VotingCardsComponent implements OnInit {
  buttons: string[] = ['?', '0', '0.5', '1', '2', '3', '5', '8', '13', '20', '40', '10'];

  constructor() { }

  ngOnInit() {}

  onVotingButtonClick(button: string) {
    console.log(button);
  }
}
