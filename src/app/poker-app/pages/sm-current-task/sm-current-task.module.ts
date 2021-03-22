import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmCurrentTaskPageRoutingModule } from './sm-current-task-routing.module';

import { SmCurrentTaskPage } from './sm-current-task.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmCurrentTaskPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [SmCurrentTaskPage]
})
export class SmCurrentTaskPageModule {}
