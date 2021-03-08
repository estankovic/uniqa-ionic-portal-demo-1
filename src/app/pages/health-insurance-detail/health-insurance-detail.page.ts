import {Component, OnInit, ViewChild} from '@angular/core';
import {NavController, Platform} from '@ionic/angular';
import {ITabSwitcher} from '../../shared/components/tab-switcher/tab-switcher.interface';
import {PlatformService} from '../../shared/services/platform/platform.service';
import {ActivatedRoute} from '@angular/router';
import {Contract} from '../../shared/interfaces/all';
import {getContract} from '../../shared/data/all';

@Component({
  selector: 'app-health-insurance-detail',
  templateUrl: './health-insurance-detail.page.html',
  styleUrls: ['./health-insurance-detail.page.scss'],
})
export class HealthInsuranceDetailPage implements OnInit {

  @ViewChild('tabPanel', {static: false}) tabController: ITabSwitcher;

  contract: Contract;

  get isMobile() {
    return this.platformService.isMobileSize$;
  }

  constructor(
      private readonly platformService: PlatformService,
      private readonly nav: NavController,
      private readonly route: ActivatedRoute,
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.contract = getContract(id);
  }

  ngOnInit() {
  }

  navigateBack() {
    this.nav.back();
  }

}
