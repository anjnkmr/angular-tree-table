import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AngularTreeTableComponent } from './angular-tree-table.component';



@NgModule({
  declarations: [AngularTreeTableComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    AngularTreeTableComponent
  ]
})
export class AngularTreeTableModule { }
