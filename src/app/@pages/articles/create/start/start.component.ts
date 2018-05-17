import { Component, OnInit } from '@angular/core';
import {ViewModel} from "../../../../@core/models/structure/view";
import {WriteService} from "../../../../@core/data/write.service";
import {Router} from "@angular/router";

@Component({
  selector: 'create-article-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class ArticleStartComponent implements OnInit {
  model: ViewModel;
  tag: string;
  imgUrl: string;
  submitted = false;
  textBody: any;
  public headerImg: string;
  constructor(
    private service: WriteService,
    private router: Router,
  ) {
    // set the model from the service: this will always be a new model,
    // the service only exists within this module
    this.model = this.service.article;
  }

  ngOnInit() {
    console.log('[Create Start] : ',this.model);
  }

  setHeaderImage() {
    this.model.headerImg = this.headerImg;
    this.headerImg = '';
  }


  addTag() {
    this.model.tags.push(this.tag);
    this.tag = '';
  }

  onSubmit() { this.submitted = true; }

  // #TODO: move this into `create/submit`.
  submit() {
    console.log(this.model);
    console.log(this.service.article);
    // this.service.cache_article = this.model;
    // #TODO: save the model to cloud later - semi save
    // console.log(this.model)
    // // this.service.createDocument(this.model);
    this.router.navigate(['articles','create','write'])
  }

  preview() {

  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
