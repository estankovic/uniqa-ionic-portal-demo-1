import {Component, OnInit, ViewChild} from '@angular/core';
import {NavController, Platform} from '@ionic/angular';
import {ITabSwitcher} from '../../shared/components/tab-switcher/tab-switcher.interface';

@Component({
  selector: 'app-health-insurance-detail',
  templateUrl: './health-insurance-detail.page.html',
  styleUrls: ['./health-insurance-detail.page.scss'],
})
export class HealthInsuranceDetailPage implements OnInit {

  @ViewChild('tabPanel', {static: false}) tabController: ITabSwitcher;

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
