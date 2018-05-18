import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../../@core/data/session.service";
import {Article} from "../../../@core/models/article";
import {ViewModel} from "../../../@core/models/structure/view";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  model: ViewModel;
  message: string;
  canRender: boolean = true;
  constructor(
    private session: SessionService
  ) {
    if(this.session.model.active) {
      this.model = this.session.getArticle();
      this.canRender = true;
    } else {
      this.message = 'Ooops! No Article was held in the Session';
    }
  }

  ngOnInit() {
  }

}
