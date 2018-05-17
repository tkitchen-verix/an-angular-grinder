import {Inject, Injectable} from '@angular/core';
import {AppSettingsService} from "./app-settings.service";

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  public BASE;
  constructor(
    // private http: Http,
    private Settings: AppSettingsService,
    @Inject('BASE_URL') baseUrl: string
  ) {}

  get title() {
    let title = window.location.pathname;
    if(title.length === 3) {title = title[2]} else { title = title[1]}
    return title;
  }

  get settings(){
    return this.Settings.getViewConfig(this.title);
  }
  getView(id: string) {
    return this.Settings.getViewConfig(id);
  }
}
