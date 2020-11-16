import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPortalHeaderComponent} from './components/main-portal-header/main-portal-header.component';
import {IonicModule} from '@ionic/angular';
import {PortalSubHeaderComponent} from './components/portal-sub-header/portal-sub-header.component';
import {ContentComponent} from './components/content/content.component';



@NgModule({
  declarations: [
      MainPortalHeaderComponent,
      PortalSubHeaderComponent,
      ContentComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
      MainPortalHeaderComponent,
      PortalSubHeaderComponent,
      ContentComponent
  ]
})
export class SharedModule { }
