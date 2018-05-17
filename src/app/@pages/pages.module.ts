import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { ViewComponent } from './articles/view/view.component';
import { PagesComponent } from './pages/pages.component';
import {RouterModule} from "@angular/router";
import {PagesRoutingModule} from "./pages-routing.module";
import {ThemeModule} from "../@theme/@theme.module";
import {FroalaEditorModule, FroalaViewModule} from "angular-froala-wysiwyg";
import {NgxEditorModule} from "ngx-editor";
const COMPONENTS = [
  ViewComponent,
  PagesComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxEditorModule ,
    PagesRoutingModule,
    ThemeModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  declarations: [ ...COMPONENTS ],
  exports: [ ...COMPONENTS ]
})
export class PagesModule { }
