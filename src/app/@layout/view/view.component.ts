import { Component, OnInit } from '@angular/core';
import { ViewModel } from '../../@core/models/structure/view';
import {ViewService} from "./view.service";
import {CarouselModel} from "../../@core/models/carousel";
import {Router} from "@angular/router";
const CAROUSEL: CarouselModel = {
  title: 'Articles',
  icon: 'comment'
};
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public settings: ViewModel;
  public path: any;
  carousel: CarouselModel = CAROUSEL;
  constructor(
    private service: ViewService,
    private router: Router
  ) {
    console.log('View Component');
    this.router.events
      .subscribe((event) => {
        this.setViewTitle();
      });
  }

  ngOnInit() {
    console.log('[Settings] : ', this.settings);
  }
  public setViewTitle() {
    this.path = this.router.url;
    this.path = this.path.replace('').split('/');
    this.path = this.path[2];
    console.log(this.path);
    this.settings = this.service.getView(this.path);
    this.carousel.title = this.settings.title;
  }
}
