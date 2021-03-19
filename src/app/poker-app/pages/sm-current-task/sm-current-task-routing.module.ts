import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmCurrentTaskPage } from './sm-current-task.page';

const routes: Routes = [
  {
    path: '',
    component: SmCurrentTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmCurrentTaskPageRoutingModule {}
