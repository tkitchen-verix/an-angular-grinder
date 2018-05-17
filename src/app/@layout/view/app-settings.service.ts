import { Injectable } from '@angular/core';
import { AppConfigModel} from "../../@core/models/application";
import { NavigationItemModel} from "../../@core/models/layout/navigation/navigation";
import {_APP_CONFIG, AnNgxAppConfig} from "../../../config/app.config";

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  public name: string = '[App Settings Service] ';
  public settings: AnNgxAppConfig;
  constructor() {
    this.settings = _APP_CONFIG;
  }
  getLandingConfig() {
    let config = this.settings.v1_config.landingConfig;
    return config;
  }
  getViewConfig(title: string){
    if(title === undefined) { title = 'articles'; }
    let viewSetting = this.settings.v1_config.views.filter(t => t.title === title);
    return viewSetting[0];
  }
  get navigation(): NavigationItemModel[]{
    return this.settings.v1_config.nav;
  };
  get config(){
    let config = this.settings;
    return config;
  }
}
