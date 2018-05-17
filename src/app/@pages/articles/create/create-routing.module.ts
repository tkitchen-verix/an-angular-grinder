import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateComponent} from "./create.component";
import {ArticleStartComponent} from "./start/start.component";
import {ArticleWriteComponent} from "./write/write.component";
import {ArticlePreviewComponent} from "./preview/preview.component";
import {ArticleSubmitComponent} from "./submit/submit.component";

const routes: Routes = [
  {
    path: '',
    component: CreateComponent,
    children: [
      {
        path: '',
        redirectTo: 'start'
      },
      {
        path: 'start',
        component: ArticleStartComponent
      },
      {
        path: 'write',
        component: ArticleWriteComponent
      },
      {
        path: 'preview',
        component: ArticlePreviewComponent
      },
      {
        path: 'submit',
        component: ArticleSubmitComponent
      },
      {
        path: '**',
        redirectTo: 'start'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule { }
