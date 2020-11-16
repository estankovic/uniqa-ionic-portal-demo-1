import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthInsuranceDetailPageRoutingModule } from './health-insurance-detail-routing.module';

import { HealthInsuranceDetailPage } from './health-insurance-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthInsuranceDetailPageRoutingModule
  ],
  declarations: [HealthInsuranceDetailPage]
})
export class HealthInsuranceDetailPageModule {}
