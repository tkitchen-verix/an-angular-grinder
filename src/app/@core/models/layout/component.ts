export class ComponentModel {
  title: string;
  type: ComponentType;
  color: string;
  imageUrl?: string;
}

export enum ComponentType {
  Information = 'Information',
  FullWidth = 'Full Width',
  DefaultCard = 'Card',
  ImageCard = 'Card With Image',
}
