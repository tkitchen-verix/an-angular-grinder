import { Component, OnInit } from '@angular/core';
import {_APP_CONFIG, AnNgxAppConfig} from "../../../config/app.config";
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  model: AnNgxAppConfig = _APP_CONFIG;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

}
