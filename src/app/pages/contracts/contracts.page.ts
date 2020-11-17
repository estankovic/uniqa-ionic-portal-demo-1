import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Platform} from '@ionic/angular';
import {Router} from '@angular/router';
import {ITabSwitcher} from '../../shared/components/tab-switcher/tab-switcher.interface';

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
})
export class ContractsPage implements OnInit {

  @ViewChild('panel') tabController: ITabSwitcher;


  data: Record[] = [0, 1, 2, 3].map(v => ({
    id: '01/004/413906',
    title: 'Privatarzt',
    items: !!(v % 3) ? [] : [
      {
        title: '26.02.202 | Max Musterman • Apotheke',
        label: 'In Bearbeitung',
        details: !!(v % 2)
      }
    ]
  }));


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
}
