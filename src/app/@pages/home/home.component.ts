import { Component } from '@angular/core';
import {HomeModel} from "../../@core/models/config/home.config";
import {HomeConfig} from "../../@core/config/home.config";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  model: HomeModel = HomeConfig;
}
