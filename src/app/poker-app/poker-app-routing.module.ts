import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/session-list/session-list.module').then(m => m.SessionListPageModule),
  },
  {
    path: 'sm-current-task',
    loadChildren: () => import('./pages/sm-current-task/sm-current-task.module').then( m => m.SmCurrentTaskPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokerAppRoutingModule { }
