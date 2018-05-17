import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeCommonModule } from "./common/common.module";
import { AnMaterialModule } from "./an-material/an-material.module";

const MODULES = [
  AnMaterialModule,
  ThemeCommonModule
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [],
  exports: [ ...MODULES ]
})
export class ThemeModule { }
