import {Component, OnInit, ViewChild} from '@angular/core';
import {NavController, Platform} from '@ionic/angular';
import {ITabSwitcher} from '../../shared/components/tab-switcher/tab-switcher.interface';
import {PlatformService} from '../../shared/services/platform/platform.service';

@Component({
  selector: 'app-health-insurance-detail',
  templateUrl: './health-insurance-detail.page.html',
  styleUrls: ['./health-insurance-detail.page.scss'],
})
export class HealthInsuranceDetailPage implements OnInit {

  @ViewChild('tabPanel', {static: false}) tabController: ITabSwitcher;

  get isMobile() {
    return this.platformService.isMobileSize$;
  }

  constructor(
      private readonly platformService: PlatformService,
      private readonly nav: NavController
  ) { }

  ngOnInit() {
  }

  navigateBack() {
    this.nav.back();
  }

}
