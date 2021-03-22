import { Component } from '@angular/core';
import {Platform} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  get isMobile() {
    return this.platform.is('mobileweb') || this.platform.is('mobile');
  }

  constructor(private readonly platform: Platform, private readonly router: Router) {}

  openPoker() {
    this.router.navigate(['poker-app'])
  }
}
