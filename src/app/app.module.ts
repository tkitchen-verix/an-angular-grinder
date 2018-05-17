import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnNavComponent } from './an-nav/an-nav.component';
import { NavBarComponent } from './an-nav/nav-bar/nav-bar.component';
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireDatabaseModule} from "angularfire2/database";
import { ModuleComponent } from './module/module.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {APP_BASE_HREF, CommonModule} from "@angular/common";
import {AngularFireStorageModule} from "angularfire2/storage";
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./@pages/home/home.component";
import {ThemeModule} from "./@theme/@theme.module";

@NgModule({
  declarations: [
    AppComponent,
    AnNavComponent,
    NavBarComponent,
    ModuleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ThemeModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [{ provide: 'BASE_URL', useFactory: getBaseUrl },{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function getBaseUrl() {
  let ref = document.getElementsByTagName('base')[0].href;
  return ref;
}
