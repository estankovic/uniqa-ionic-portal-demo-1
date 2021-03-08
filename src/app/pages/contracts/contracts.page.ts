import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {Platform} from '@ionic/angular';
import {Router} from '@angular/router';
import {ITabSwitcher} from '../../shared/components/tab-switcher/tab-switcher.interface';
import {PlatformService} from '../../shared/services/platform/platform.service';
import {tap} from 'rxjs/operators';
import {getAllContracts} from '../../shared/data/all';

interface Record {
  title: string;
  id: string;
  items: {
    title: string;
    label: string;
    details: boolean
  }[];
}

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.page.html',
  styleUrls: ['./contracts.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContractsPage implements OnInit {

  @ViewChild('panel') tabController: ITabSwitcher;

  healthContracts = getAllContracts('HEALTH');
  carContracts = getAllContracts('CAR');

  get isMobile() {
    return this.platformService.isMobileSize$;
  }

  constructor(
      private readonly router: Router,
      private readonly platformService: PlatformService
  ) { }

  ngOnInit() {
  }

  openHealthContractDetail(event: {id: string}) {
    this.router.navigate(['./health-detail', event.id]);
  }
}
