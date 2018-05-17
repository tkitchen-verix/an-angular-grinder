import {Component, Input, OnInit} from '@angular/core';
import {SectionBlockModel} from "../../../../../@core/models/structure/section";

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  @Input()
  settings: SectionBlockModel;
  component: string = '[ Section Block Component ] : ';
  constructor() { }

  ngOnInit() {
  }

}
