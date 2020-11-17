import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Platform} from '@ionic/angular';
import {Router} from '@angular/router';
import {ITabSwitcher} from '../../shared/components/tab-switcher/tab-switcher.interface';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.page.html',
  styleUrls: ['./contracts.page.scss'],
})
export class ContractsPage implements OnInit, AfterViewInit {

  @ViewChild('panel') tabController: ITabSwitcher;

  get isMobile() {
    return this.platform.is('mobileweb') || this.platform.is('mobile');
  }

  constructor(
      private readonly platform: Platform,
      private readonly router: Router
  ) { }

  ngOnInit() {
  }

  openHealthContractDetail() {
    this.router.navigate(['./health-detail']);
  }

  ngAfterViewInit(): void {
    console.log(this.tabController);
  }

}
