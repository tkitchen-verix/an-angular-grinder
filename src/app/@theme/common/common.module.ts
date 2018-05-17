import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselComponent} from "./carousel/carousel.component";
import {AnMaterialModule} from "../an-material/an-material.module";
import { FooterComponent } from './footer/footer.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';

const COMMON_COMPONENTS = [
  CarouselComponent,
  FooterComponent,
  SnackBarComponent,
];

@NgModule({
  imports: [
    CommonModule,
    AnMaterialModule,
  ],
  declarations: [ ...COMMON_COMPONENTS, ],
  exports: [ ...COMMON_COMPONENTS ]
})
export class ThemeCommonModule { }
