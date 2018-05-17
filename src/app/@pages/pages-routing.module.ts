import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {PagesComponent} from "./pages/pages.component";

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'articles',
        loadChildren: './articles/articles.module#ArticlesModule'
      },
      {
        path: '**',
        redirectTo: 'articles'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
