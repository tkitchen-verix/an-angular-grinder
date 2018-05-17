export class TextDisplayModel {
  title: string;
  paragraphs: Paragraph[];
  header?: string;
  footer?: string;
}

export class Paragraph {
  body: string;
  title?: string;
  header?: string;
  footer?: string;
}
