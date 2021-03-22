import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'health-detail/:id',
    loadChildren: () =>
      import('./pages/health-insurance-detail/health-insurance-detail.module').then(m => m.HealthInsuranceDetailPageModule)
  },
  {
    path: 'poker-app',
    loadChildren: () =>
      import('./poker-app/poker-app-routing.module').then(m => m.PokerAppRoutingModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
