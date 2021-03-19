import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionListPageRoutingModule } from './session-list-routing.module';

import { SessionListPage } from './session-list.page';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionListPageRoutingModule,
    SharedModule,
  ],
  declarations: [SessionListPage]
})
export class SessionListPageModule {}
