import { Injectable } from '@angular/core';
import {Article} from "../models/article";
import {ViewModel} from "../models/structure/view";

export class Session {
  active: boolean = false;
  currentArticle: ViewModel;
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  model: Session = new Session();
  constructor() { }

  setArticle(article: ViewModel): Promise<any> {

    return new Promise((resolve, reject) => {
      this.model.currentArticle = article;
      this.model.active = true;
      if ( this.model ) {
          resolve(true);
      } else {
        reject('No Article could be set');
      }
    });

  }
  getArticle(): ViewModel {
    if(this.model.currentArticle) {
      return this.model.currentArticle;
    } else {
      throw new Error('No Article');
    }
  }
  dumpArticle() {
    this.model.currentArticle = null;
  }

}
