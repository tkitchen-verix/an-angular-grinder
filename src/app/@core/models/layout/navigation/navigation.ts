import {META_BASE} from "../../structure/base";

export class NavigationModel {
  brand: string;
  navigation: NavigationItemModel[] = [];
}

export class NavigationItemModel extends META_BASE{
  url: string;
  active: boolean;
  default: boolean;
  guardRole: string;
}
