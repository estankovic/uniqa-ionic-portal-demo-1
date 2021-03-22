import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'contracts',
        loadChildren: () => import('../pages/contracts/contracts.module').then( m => m.ContractsPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../pages/contact/contact.module').then( m => m.ContactPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/contracts',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/contracts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
