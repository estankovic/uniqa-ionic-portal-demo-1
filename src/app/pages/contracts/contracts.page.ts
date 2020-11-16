import { Component, OnInit } from '@angular/core';
import {Platform} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.page.html',
  styleUrls: ['./contracts.page.scss'],
})
export class ContractsPage implements OnInit {

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
