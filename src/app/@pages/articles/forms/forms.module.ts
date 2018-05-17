import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StartFormComponent} from "./start-form/start-form.component";
import {SectionFormComponent} from "./section-form/section-form.component";
import {FormsModule} from "@angular/forms";
import {AnMaterialModule} from "../../../@theme/an-material/an-material.module";
const COMPONENTS = [
  StartFormComponent,
  SectionFormComponent,
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AnMaterialModule,
  ],
  declarations: [ ...COMPONENTS ],
  exports: [ ...COMPONENTS ]
})
export class AppFormsModule { }
