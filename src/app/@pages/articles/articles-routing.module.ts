import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticlesComponent} from "./articles.component";
import {ArticlesHomeComponent} from "./articles-home/articles-home.component";

const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
    children: [
      {
        path: '',
        redirectTo: 'read'
      },
      {
        path: 'read',
        component: ArticlesHomeComponent
      },
      {
        path: 'create',
        loadChildren: './create/create.module#CreateModule'
      },
      {
        path: 'read/**',
        loadChildren: '../../@layout/view/view.module#ViewModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
