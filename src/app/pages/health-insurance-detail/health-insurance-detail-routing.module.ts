import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthInsuranceDetailPage } from './health-insurance-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HealthInsuranceDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthInsuranceDetailPageRoutingModule {}
