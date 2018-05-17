import {ViewModel} from "./structure/view";

export interface IArticle {
  id: string;
  title: string;
  tags: string[];
  links: string[];
  images: string[];
  subtitle: string;
  body: string;
  exp_boosts: number;
  shares: number;
  created: string;
  created_by: string;
}

export class Article {
  id: string;
  title: string;
  tags: string[] = [];
  links: string[] = [];
  headerImg: string;
  images: string[] = [];
  subtitle: string;
  body: string;
  view: ViewModel;
  exp_boosts: number;
  shares: number;
  created: string;
  created_by: string;
  constructor() {
    this.exp_boosts = 0;
    this.shares = 0;
  }
}
