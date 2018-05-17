import { Injectable } from '@angular/core';
import {Article} from "../models/article";

export class Session {
  active: boolean = false;
  currentArticle: Article;
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  model: Session = new Session();
  constructor() { }

  setArticle(article: Article): string | Error {
    this.model.currentArticle = article;
    this.model.active = true;
    return 'success'
  }
  getArticle(): Article {
    if(this.model.currentArticle) {
      return this.model.currentArticle;
    }
    else {
      throw new Error('No Article');
    }
  }
  dumpArticle() {
    this.model.currentArticle = null;
  }

}
