import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResultTableComponent} from './components/result-table/result-table.component';
import {VotingCardsComponent} from './components/voting-cards/voting-cards.component';
import {IonicModule} from '@ionic/angular';



@NgModule({
  declarations: [VotingCardsComponent, ResultTableComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [VotingCardsComponent, ResultTableComponent]
})
export class SharedModule { }
