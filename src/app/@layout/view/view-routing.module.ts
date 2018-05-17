import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view.component';

const ROUTES: Routes = [
  {
    path: ':viewTitle',
    component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
