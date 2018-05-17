import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {WriteService} from "../../../../@core/data/write.service";
import {ViewModel, ViewSectionModel} from "../../../../@core/models/structure/view";
import {Router} from "@angular/router";
import {GridManager, GridManagerConfig} from "../../../../@theme/an-material/grid-manager";
import {BreakpointObserver} from "@angular/cdk/layout";
import {Helpers} from "../../../../@core/utils/helpers";
import {ConsoleLogger} from "../../../../@core/utils/logger";
const WRITE_GRID: GridManagerConfig = {
  extraSmall: 1,
  small: 1,
  medium: 2,
  large: 3
};

class Person {
  constructor(public name: string) {}
}


@Component({
  selector: 'create-article-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})

export class ArticleWriteComponent implements OnInit {
  model: ViewModel;
  $grid: GridManager;
  grid_columns: number = 2;
  mainCols: number = 1;
  temp_section: ViewSectionModel = new ViewSectionModel();
  small: boolean;
  color = 'accent';
  checked = false;
  disabled = false;
  @ViewChild('sectionForm') sectionForm: ElementRef;
  sectionFormHeight: number;
  constructor(
    private service: WriteService,
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    this.$grid = new GridManager('200px', this.breakpointObserver);
    this.$grid.gridLayout = WRITE_GRID;
    this.$grid.watch();
    this.$grid.cols.subscribe((cols)=>{
      this.grid_columns = cols;
      if(cols === WRITE_GRID.small) { this.small = true; this.mainCols = 1;}
      else {
        this.small = false;
      }
    });
    // set the model from the service: this will always be a new model,
    // the service only exists within this module
    this.model = this.service.article;
  }

  ngOnInit() { }

  handleChange(event: ViewSectionModel[]) {
    console.log(event);
    this.model.sections = event;
  }
  getKeys(obj){
    let keys = [];
    for(let key in obj){
      keys.push(key);
    }
    return keys;
  }
  addSection() {
    console.log(this);
    if(this.model.sections.length === 0) {
      this.service.set_introduction = false;
    }
    let intro = this.model.sections.filter(section => section.type === 'Introduction');
    if(intro.length === 0) {
      this.service.set_introduction = false;
    }
    if(this.service.introduction) {
      this.model.sections.push(this.temp_section);
      let keys = this.getKeys(this.model.sections[0])
      console.log(keys)
      this.temp_section = new ViewSectionModel();
    } else
    {
      this.service.set_introduction = true;
      this.temp_section.type = 'Introduction';
      this.model.sections.splice(0, 0, this.temp_section);
      // this.model.sections.push(this.temp_section);
      this.temp_section = new ViewSectionModel();
    }
  }

  toggleLayout(event){
    console.log(event);
    if(event.checked === false) { this.mainCols = 2 }
    else {this.mainCols = 1};
  }

  back() {
    this.router.navigate(['articles','create', 'start']);
  }

}
