import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './components/basic/basic.component';
import { ExpandableComponent } from './components/expandable/expandable.component';
import { ServerSideComponent } from './components/server-side/server-side.component';
import { SelectComponent } from './components/select/select.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { ExpandableHeaderLessComponent } from './components/expandable-header-less/expandable-header-less.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic',
    pathMatch: 'full'
  },
  {
    path: 'basic',
    component: BasicComponent
  },
  {
    path: 'select',
    component: SelectComponent
  },
  {
    path: 'expandable',
    component: ExpandableComponent
  },
  {
    path: 'expandable-header-less',
    component: ExpandableHeaderLessComponent
  },
  {
    path: 'inputs',
    component: InputsComponent
  },
  {
    path: 'server-side',
    component: ServerSideComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
