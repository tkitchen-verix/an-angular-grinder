import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule, MatOptionModule, MatSelectModule,
  MatSidenavModule, MatSlideToggleModule, MatSnackBar, MatSnackBarModule,
  MatToolbarModule
} from "@angular/material";
import {LayoutModule} from "@angular/cdk/layout";

const _MATERIAL_MODULES = [
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  LayoutModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatInputModule,
  MatChipsModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatExpansionModule,
  MatSelectModule,
  MatOptionModule,
]

@NgModule({
  imports: [
    CommonModule,
    ..._MATERIAL_MODULES
  ],
  declarations: [],
  exports: [..._MATERIAL_MODULES]
})
export class AnMaterialModule { }
