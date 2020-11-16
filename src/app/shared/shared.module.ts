import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPortalHeaderComponent} from './components/main-portal-header/main-portal-header.component';
import {IonicModule} from '@ionic/angular';



@NgModule({
  declarations: [
      MainPortalHeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
      MainPortalHeaderComponent
  ]
})
export class SharedModule { }
