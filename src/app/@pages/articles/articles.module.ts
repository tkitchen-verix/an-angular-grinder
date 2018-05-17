import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { ArticlesHomeComponent } from './articles-home/articles-home.component';
import {AnMaterialModule} from "../../@theme/an-material/an-material.module";
import {FormsModule} from "@angular/forms";

const COMPONENTS = [
  ArticlesComponent,
  ArticlesHomeComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AnMaterialModule,
    ArticlesRoutingModule
  ],
  declarations: [ ...COMPONENTS ],
  exports: [ ...COMPONENTS ]
})
export class ArticlesModule { }
