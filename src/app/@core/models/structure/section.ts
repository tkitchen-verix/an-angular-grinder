import {BlockComponentModel, LayoutClassModel} from "./block";
import {META_BASE} from "./base";

export class SectionBlockModel extends META_BASE {
  layoutClass: LayoutClassModel;
  components?: BlockComponentModel[];
}
