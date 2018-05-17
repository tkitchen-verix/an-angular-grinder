import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "../../../@core/data/articles.service";
import {Article} from "../../../@core/models/article";
import {ViewModel, ViewSectionModel} from "../../../@core/models/structure/view";
import {BlockComponentModel} from "../../../@core/models/structure/block";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(private service: ArticlesService)
  { }

  ngOnInit() {

  }

}
