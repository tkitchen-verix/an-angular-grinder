import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StartFormComponent} from "./start-form/start-form.component";
import {SectionFormComponent} from "./section-form/section-form.component";
import {FormsModule} from "@angular/forms";
import {AnMaterialModule} from "../../../@theme/an-material/an-material.module";
import {NgxEditorModule} from "ngx-editor";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
const COMPONENTS = [
  StartFormComponent,
  SectionFormComponent,
];
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    NgxEditorModule,
    AnMaterialModule,
  ],
  declarations: [ ...COMPONENTS ],
  exports: [ ...COMPONENTS ]
})
export class AppFormsModule { }
