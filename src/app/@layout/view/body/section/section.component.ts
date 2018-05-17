import {Component, Input, OnInit} from '@angular/core';
import {ViewSectionModel} from "../../../../@core/models/structure/view";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input()
  settings: ViewSectionModel;
}
