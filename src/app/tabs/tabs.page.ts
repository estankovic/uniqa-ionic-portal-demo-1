import { Component } from '@angular/core';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  get isMobile() {
    return this.platform.is('mobileweb');
  }

  constructor(private readonly platform: Platform) {}

}
