import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IsLoggedInGuard} from './shared/services/is-logged-in.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [IsLoggedInGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/session-list/session-list.module').then(m => m.SessionListPageModule),
      },
      {
        path: 'session/:id',
        loadChildren: () => import('./pages/sm-current-task/sm-current-task.module').then( m => m.SmCurrentTaskPageModule),
      }
    ]
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule),
  },
  {
    path: 'session-history/:id',
    loadChildren: () => import('./pages/session-history/session-history.module').then( m => m.SessionHistoryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokerAppRoutingModule { }
