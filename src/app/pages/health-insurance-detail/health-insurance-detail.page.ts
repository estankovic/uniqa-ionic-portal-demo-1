import { Component, OnInit } from '@angular/core';
import {NavController, Platform} from '@ionic/angular';

@Component({
  selector: 'app-health-insurance-detail',
  templateUrl: './health-insurance-detail.page.html',
  styleUrls: ['./health-insurance-detail.page.scss'],
})
export class HealthInsuranceDetailPage implements OnInit {


  get isMobile() {
    return this.platform.is('mobileweb') || this.platform.is('mobile');
  }

  constructor(
      private readonly platform: Platform,
      private readonly nav: NavController
  ) { }

  ngOnInit() {
  }

  navigateBack() {
    this.nav.back();
  }

}
