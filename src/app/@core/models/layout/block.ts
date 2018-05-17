import {ComponentModel} from "./component";

export class BlockModel {
  title: string;
  subtitle: string;
  type: BlockType;
  components: ComponentModel[];
}

export enum BlockType {
  FullWidth = 'Full Width'
}
