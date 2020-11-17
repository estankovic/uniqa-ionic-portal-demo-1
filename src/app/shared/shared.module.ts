import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPortalHeaderComponent} from './components/main-portal-header/main-portal-header.component';
import {IonicModule} from '@ionic/angular';
import {PortalSubHeaderComponent} from './components/portal-sub-header/portal-sub-header.component';
import {ContentComponent} from './components/content/content.component';
import {HeaderComponent} from './components/header/header.component';
import {TabComponent} from './components/tab/tab.component';
import {TabGroupComponent} from './components/tab-group/tab-group.component';
import {TabSwitcherLabelComponent} from './components/tab-switcher-label/tab-switcher-label.component';
import {TabSwitcherComponent} from './components/tab-switcher/tab-switcher.component';



@NgModule({
  declarations: [
      MainPortalHeaderComponent,
      PortalSubHeaderComponent,
      ContentComponent,
      HeaderComponent,
      TabComponent,
      TabGroupComponent,
      TabSwitcherLabelComponent,
      TabSwitcherComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
      MainPortalHeaderComponent,
      PortalSubHeaderComponent,
      ContentComponent,
      HeaderComponent,
      TabComponent,
      TabGroupComponent,
      TabSwitcherLabelComponent,
      TabSwitcherComponent
  ]
})
export class SharedModule { }
