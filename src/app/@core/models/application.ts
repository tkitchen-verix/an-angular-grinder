import {ViewModel} from "./structure/view";
import {META_BASE} from "./structure/base";
import {NavigationItemModel} from "./layout/navigation/navigation";
import {LandingConfigModel} from "./layout/landing-page";

export class AppConfigModel extends META_BASE {
  app_id: string;
  landingConfig: LandingConfigModel;
  nav: NavigationItemModel[];
  views: ViewModel[];
}
