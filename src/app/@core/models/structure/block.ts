import {META_BASE} from "./base";

export class SectionBlockModel extends META_BASE {
  layoutClass: LayoutClassModel;
  components?: BlockComponentModel[];
}
export class BlockComponentModel extends META_BASE {
  template: string;
  layoutClass: LayoutClassModel;
}

export class LayoutClassModel {
  type: string; // column or row
  /** define if we display the block at each media point,
   * and the behaviour of the block at each media breakpoint
   */
  xs: BlockMediaQuery;
  sm: BlockMediaQuery;
  md: BlockMediaQuery;
  lg: BlockMediaQuery;
  xl: BlockMediaQuery;
}
export class BlockMediaQuery {
  display: boolean;
  width: string;
}
