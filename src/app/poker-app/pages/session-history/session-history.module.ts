import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionHistoryPageRoutingModule } from './session-history-routing.module';

import { SessionHistoryPage } from './session-history.page';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionHistoryPageRoutingModule,
    SharedModule
  ],
  declarations: [SessionHistoryPage]
})
export class SessionHistoryPageModule {}
