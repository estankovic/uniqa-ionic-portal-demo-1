import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VotingCardsComponent} from './components/voting-cards/voting-cards.component';
import {IonicModule} from '@ionic/angular';



@NgModule({
  declarations: [VotingCardsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [VotingCardsComponent]
})
export class SharedModule { }
