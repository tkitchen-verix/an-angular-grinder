import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { BodyComponent } from './body/body.component';
import { SectionComponent } from './body/section/section.component';
import { BlockComponent } from './body/section/block/block.component';
import { ComponentComponent } from './body/section/block/component/component.component';
import {ThemeModule} from "../../@theme/@theme.module";

const MODULES = [
  ThemeModule
];
const COMPONENTS = [
  ViewComponent,
  BodyComponent,
  SectionComponent,
  BlockComponent,
  ComponentComponent
];

@NgModule({
  imports: [
    CommonModule,
    ViewRoutingModule,
    ...MODULES
  ],
  declarations: [ ...COMPONENTS],
  exports: [ ...COMPONENTS ]
})
export class ViewModule { }
