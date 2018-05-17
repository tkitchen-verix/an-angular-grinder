import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ViewService} from "../view.service";
import {ViewModel} from "../../../@core/models/structure/view";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input()
  settings: ViewModel;
  constructor(
    private service: ViewService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  private getSettings() {
    console.log('[ Body ]', this.settings)
  }
}
