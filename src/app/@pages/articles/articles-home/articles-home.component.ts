import { Component, OnInit } from '@angular/core';
import {GridManager} from "../../../@theme/an-material/grid-manager";
import {ViewModel} from "../../../@core/models/structure/view";
import {Observable} from "rxjs/Rx";
import {ArticlesService} from "../../../@core/data/articles.service";
import {BreakpointObserver} from "@angular/cdk/layout";
import {SessionService} from "../../../@core/data/session.service";
import {Router} from "@angular/router";
import {Article} from "../../../@core/models/article";

@Component({
  selector: 'app-articles-home',
  templateUrl: './articles-home.component.html',
  styleUrls: ['./articles-home.component.css']
})
export class ArticlesHomeComponent implements OnInit {

  $articles: Observable<ViewModel[]>;
  $grid: GridManager;
  // $breakpoint: Observable<BreakpointState> = this.breakpointObserver.;
  constructor(
    private service: ArticlesService,
    private breakpointObserver: BreakpointObserver,
    private session: SessionService,
    private router: Router,
  ) {
    this.$articles = this.service.getArticles;
    this.$grid = new GridManager('425px', this.breakpointObserver);
    this.$grid.watch();
  }

  ngOnInit() {
  }
  readArticle(article: Article) {
    let request = this.session.setArticle(article);
    if(request === 'success') {
      this.router.navigate(['articles/read/'+article.title]);
    }
  }

}
