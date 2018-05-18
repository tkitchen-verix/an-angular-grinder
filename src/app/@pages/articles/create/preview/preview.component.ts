import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {WriteService} from "../../../../@core/data/write.service";
import {ViewModel} from "../../../../@core/models/structure/view";

@Component({
  selector: 'create-article-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {
  model: ViewModel;
  constructor(
    private service: WriteService,
    private router: Router
  ) {
    this.model = this.service.article;
  }

  ngOnInit() {

  }
  submit() {
    // #TODO: perform submit here, reponse at submit view
    this.service.saveArticle();
    this.router.navigate(['articles', 'create', 'submit']);
  }
  back() {
    this.router.navigate(['articles', 'create', 'write']);
  }

}
