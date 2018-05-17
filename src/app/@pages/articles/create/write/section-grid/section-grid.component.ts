import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {ViewSectionModel} from "../../../../../@core/models/structure/view";
import {GridManager, GridManagerConfig} from "../../../../../@theme/an-material/grid-manager";
import {BreakpointObserver} from "@angular/cdk/layout";
import {MatSnackBar} from "@angular/material";
import {WriteService} from "../../../../../@core/data/write.service";
const WRITE_GRID: GridManagerConfig = {
  extraSmall: 1,
  small: 1,
  medium: 2,
  large: 3
};

@Component({
  selector: 'app-section-grid',
  templateUrl: './section-grid.component.html',
  styleUrls: ['./section-grid.component.css']
})
export class SectionGridComponent implements OnInit {
  @Input()
  model: ViewSectionModel[];
  @Output()
  _model_change: EventEmitter<ViewSectionModel[]> = new EventEmitter<ViewSectionModel[]>();
  // #TODO: Remove these maybe?
  mainCols: number = 1;
  small: boolean;
  // --- end

  $grid: GridManager;
  grid_columns: number = 2;
  // drag and drop
  offering_delete:  boolean = false;
  grabbing: boolean = false;
  section_in_transit: ViewSectionModel;
  backup_list: any[];
  transit_x: number;
  transit_y: number;
  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    if(this.grabbing) {
      this.transit_x = event.clientX + 15;
      this.transit_y = event.clientY;
    }
  }

  constructor(
    private service: WriteService,
    private breakpointObserver: BreakpointObserver,
    public snackBar: MatSnackBar,
    ) {
    this.model = this.service.article.sections;
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
  }

  ngOnInit() {
  }

  emitChange() {
    this._model_change.emit(this.model);
  }

  sectionEnter(section: ViewSectionModel) {
    console.log(section)
  }
  grabSection(event: Event, section: ViewSectionModel) {
    if(!this.grabbing && !this.offering_delete && !this.section_in_transit && !this.backup_list) {
      this.grabbing = true;
      this.backup_list = this.model;
      this.section_in_transit = section;
      this.model  = this.model.filter(sections => sections !== section)
      this.emitChange();
    } else { }
  }
  checkGrabbing() {
    if(this.grabbing) {
      if(!this.offering_delete) {
        this.offering_delete = true;
        this.grabbing = false;
        this.openSnackBar('You GOnna Delete That?','DELETE IT')
          .then( action => {
            this.deleteGrabbedSection();
            this.emitChange();
            this.offering_delete = false;
          })
          .catch(err => {
            this.openSnackBar(err, '');
            this.resetSections();
            this.offering_delete = false;
          })
      }
    }
  }

  insertSection(index: number) {
    this.model.splice(index, 0, this.section_in_transit);
    this.grabbing = false;
    this.section_in_transit = null;
    this.backup_list = null;
    this.offering_delete = false
    this.emitChange();
  }
  // DELETES
  deleteGrabbedSection() {
    this.deleteSection(this.section_in_transit);
    this.section_in_transit = null;
    this.backup_list = null;
    this.grabbing = false;
    this.emitChange();
  }
  deleteSection(toDelete) {
    this.model = this.model.filter(sections => sections !== toDelete);
    this.emitChange();
  }
  resetSections() {
    this.model = this.backup_list;
    this.section_in_transit = null;
    this.backup_list = null;
    this.grabbing = false;
    this.emitChange();
  }

  openSnackBar(message: string, action: string): Promise<any>  {
    return new Promise<any>( (resolve, reject) => {
      this.snackBar.open(message, action, {
        duration: 4000,
      })
        .onAction()
        .subscribe(called => resolve(called));
      setTimeout(done => reject('Took too long'), 4000);
    })
  }

}
