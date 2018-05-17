export class SlideModel {
  title: string;
  color: string;
  imgUrl: string;
  action: {
    text: string;
    path: string;
  }
}
export class CarouselModel {
  title: string;
  icon: string;
  slides?: SlideModel[]
}
