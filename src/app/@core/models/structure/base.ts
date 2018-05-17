import {TextDisplayModel} from "./text";
import { v4 as uuid } from 'uuid';
export class META_BASE {
  id: string;
  title: string;
  description: string;
  version: string = '1.0.0';
  /* #TODO: replace this with enum , populate all templates to only display when this is
      #TODO: set to published or to owner|admin|membere if implemented
  */
  status?: string;
  type?: string = 'Default';
  text?: TextDisplayModel;
  constructor() {
    this.id = uuid()
  }
}
