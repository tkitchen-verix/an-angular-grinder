import { Injectable } from '@angular/core';
import {ViewModel, ViewSectionModel} from "../models/structure/view";
import {BlockComponentModel} from "../models/structure/block";
import {ArticlesService} from "./articles.service";

@Injectable({
  providedIn: 'root'
})
export class WriteService {

  model: ViewModel;

  set_introduction: boolean;
  constructor(
    private database: ArticlesService
  ) {
    console.log('[Write Service] : Initialised')
    this.model = new ViewModel();
    this.model.tags = [];
    this.model.sections = [];
    console.log('[Write Service] Fresh Article : => ', this.model)
  }

  get article(): ViewModel {
    return this.model;
  }

  set cache_article(article) {
      console.log(article);
      console.log(this.article);
  }

  get introduction(): boolean {
    return this.set_introduction;
  }
  set introduction(bool) {
    this.set_introduction = bool;
  }

  addSection() {
    this.model.sections.push(new ViewSectionModel());
    this.model.sections[0].blocks = [];
    this.model.sections[0].blocks.push(new BlockComponentModel());
  }
  saveArticle() {
    this.database.createDocument(this.model);
  }
}
