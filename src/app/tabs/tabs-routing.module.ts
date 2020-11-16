import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'health-detail',
        loadChildren: () =>
            import('../pages/health-insurance-detail/health-insurance-detail.module').then(m => m.HealthInsuranceDetailPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/health-detail',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/health-detail',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
