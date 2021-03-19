import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/session-list/session-list-routing.module').then(m => m.SessionListPageRoutingModule),
  },
  {
    path: 'sm-current-task',
    loadChildren: () => import('./pages/sm-current-task/sm-current-task.module').then( m => m.SmCurrentTaskPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokerAppRoutingModule { }
