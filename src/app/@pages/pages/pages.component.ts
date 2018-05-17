import { Component, OnInit } from '@angular/core';
import {CarouselModel} from "../../@core/models/carousel";
const CAROUSEL: CarouselModel = {
  title: 'Articles',
  icon: 'comment'
};
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  carousel: CarouselModel = CAROUSEL;
  constructor() { }

  ngOnInit() {
  }

}
