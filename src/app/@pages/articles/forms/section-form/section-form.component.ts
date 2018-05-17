import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ViewSectionModel} from "../../../../@core/models/structure/view";
import {SectionBlockModel} from "../../../../@core/models/structure/section";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-section-form',
  templateUrl: './section-form.component.html',
  styleUrls: ['./section-form.component.css']
})
export class SectionFormComponent implements OnInit {
  @Input()
  temp_section: ViewSectionModel;
  @Output()
  _addSection: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {

  }

  ngOnInit() {  }

  onAdd() {
    this._addSection.emit(true);
  }

  addBlock() {
    if(isNullOrUndefined(this.temp_section.blocks)) {
      this.temp_section.blocks = [];
    }
    this.temp_section.blocks.push(new SectionBlockModel())
  }

}
