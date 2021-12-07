export interface Villain {
  Id: number;
  name: string;
  race: string;
  healthPoints: number;
  type: string;
  ability: string;
  image: Images;
}

export interface Images {
  id: number;
  imageName: string;
}
