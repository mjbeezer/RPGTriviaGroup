export interface Villain {
  Id: number;
  name: string;
  race: string;
  healthPoints: number;
  type: string;
  ability: string;
  image: Images;
  imageNavigation: Images;
}

export interface Images {
  id: number;
  imageName: string;
}
