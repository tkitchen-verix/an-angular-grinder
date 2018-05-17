import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import {ArticleStartComponent} from "./start/start.component";
import {ArticleWriteComponent} from "./write/write.component";
import {ArticlePreviewComponent} from "./preview/preview.component";
import {ArticleSubmitComponent} from "./submit/submit.component";
import {CreateComponent} from "./create.component";
import {AnMaterialModule} from "../../../@theme/an-material/an-material.module";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppFormsModule} from "../forms/forms.module";
import { SectionGridComponent } from './write/section-grid/section-grid.component';

const COMPONENTS = [
  CreateComponent,
  ArticleStartComponent,
  ArticleWriteComponent,
  ArticlePreviewComponent,
  ArticleSubmitComponent,
];

@NgModule({
  imports: [
    CommonModule,
    CreateRoutingModule,
    FormsModule,
    AnMaterialModule,
    AppFormsModule,
  ],
  declarations: [...COMPONENTS, SectionGridComponent]
})
export class CreateModule { }
