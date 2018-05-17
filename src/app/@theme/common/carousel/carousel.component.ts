import {Component, Input, OnInit} from '@angular/core';
import {CarouselModel} from "../../../@core/models/carousel";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input()
  model: CarouselModel;
  constructor()
  {

  }

  ngOnInit() {
  }

}
