import { Component, OnInit } from '@angular/core';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-health-insurance-detail',
  templateUrl: './health-insurance-detail.page.html',
  styleUrls: ['./health-insurance-detail.page.scss'],
})
export class HealthInsuranceDetailPage implements OnInit {


  get isMobile() {
    return this.platform.is('mobileweb');
  }

  constructor(private readonly platform: Platform) { }

  ngOnInit() {
  }

}
