import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {config, Observable, Subject} from "rxjs/Rx";

export class GridManagerConfig {
  extraSmall: number;
  small: number;
  medium: number;
  large: number;
}
const DEFAULT_GRID = {
  extraSmall: 1,
  small: 2,
  medium: 4,
  large: 6
};

export class GridManager {
  config: GridManagerConfig = DEFAULT_GRID;
  cols: Subject<number>;
  rowHeight: string;
  breakpointObserver: BreakpointObserver;
  constructor(rowHeight: string, observer: BreakpointObserver) {
    this.breakpointObserver = observer;
    this.rowHeight = rowHeight;
    this.cols = new Subject();
    // this.watch()
  }
  watch() {
    this.watchLarge();
    this.watchMedium();
    this.watchSmall();
    this.watchExtraSmall();
    this.cols.subscribe((cols) => {
      console.log('COLS: ', this.cols);
    })
  }

  set gridLayout(config: GridManagerConfig) { this.config = config };

  watchLarge() {
    this.breakpointObserver.observe(Breakpoints.Large).subscribe((state: BreakpointState) => {
      if(state.matches) {
        this.cols.next(this.config.large);
        console.log(state, this.cols);
      }
    })
  }
  watchMedium() {
    this.breakpointObserver.observe(Breakpoints.Medium).subscribe((state: BreakpointState) => {
      if(state.matches) {
        this.cols.next(this.config.medium);
        console.log(state, this.cols);
      }
    })
  }
  watchSmall() {
    this.breakpointObserver.observe(Breakpoints.Small).subscribe((state: BreakpointState) => {
      if(state.matches) {
        this.cols.next(this.config.small);
        console.log(state, this.cols);
      }
    })
  }
  watchExtraSmall() {
    this.breakpointObserver.observe(Breakpoints.XSmall).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.cols.next(this.config.extraSmall);
        console.log(state, this.cols);
      }
    })
  }
}
