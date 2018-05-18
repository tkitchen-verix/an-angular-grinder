import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Observable} from "rxjs/index";
import {SnackBarService} from "./snack-bar.service";
import {ViewModel, ViewSectionModel} from "../models/structure/view";
declare var window;

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  $firebase;
  $db;
  articles: Observable<ViewModel[]>;

  private articleCollection: AngularFirestoreCollection<ViewModel>;
  constructor(private afs: AngularFirestore, private snack: SnackBarService) {
    console.log('[ARTICLES]', this);
    this.$firebase = window.firebase;
    this.$db = this.$firebase.firestore().collection('article-collection');
    this.articleCollection = this.$db.get().then((res) => {
      console.log(res);
    });
    this.articles = afs.collection<ViewModel>('article-collection').valueChanges();

  }
  // #todo: add a class for creation responses and feed to toast service
  createDocument(article: ViewModel)
  {
    article.created = new Date().toDateString();
    article.created_by = 'Verix';
    article.cheers = 0;
    this.$db.add(JSON.parse( JSON.stringify(article))).then(
      (ref) =>
        {
          //
          console.log(ref);
          this.snack.openSnackBar(  'Article Created','Dismiss',1000)
        }
      )
  }
  get getArticles() {
    return this.articles;
  }
  updateDocument()
  {

  }
}
