import {Component, Input, OnInit} from '@angular/core';
import {BlockComponentModel} from "../../../../../../@core/models/structure/block";

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  @Input()
  settings: BlockComponentModel;
  constructor() { }
  ngOnInit() {
  }
}
