import {SectionBlockModel} from "./section";
import {META_BASE} from "./base";

export class ViewModel {
  article_id: string;
  title: string;
  sections: ViewSectionModel[];
  subtitle?: string;
  headerImg?: string;
  // #TODO: create enum, type or db entry for categories
  category: string;
  cheers?: number;
  tags?: string[];
  created?: string;
  created_by?: string;
}
export class ViewSectionModel extends META_BASE {
  layoutClass: string; // type of container : col-count etc
  blocks: SectionBlockModel[];
  imageUrl?: string;
}
