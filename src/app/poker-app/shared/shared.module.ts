import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResultTableComponent} from './components/result-table/result-table.component';



@NgModule({
  declarations: [ResultTableComponent],
  exports: [ResultTableComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
