import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {HomeComponent} from "./@pages/home/home.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', loadChildren: './@pages/pages.module#PagesModule' },
  { path: '**', redirectTo: 'home' }
];

const config: ExtraOptions = {
  useHash: true,
  enableTracing: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
  // providers: [AuthGuard],
})
export class AppRoutingModule {
}
